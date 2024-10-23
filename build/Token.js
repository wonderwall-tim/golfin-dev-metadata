/* import bitJs from 'bits.js'; */
/* import BN from 'bn.js'; */
/* import bigInt from "big-integer"; */
/* import { CAR_LAYOUT,  getLayoutMask } from './Layout.js'; */
const bitJs = require('bits.js');
const BN = require('bn.js');
const bigInt = require('big-integer');
const { CAR_LAYOUT, getLayoutMask, BitsLayout } = require('./Layout.js');
class Token {
    /**
     *
     * @param {{metadata?:object,id?:BN}} data
     * @param {BitsLayout} layout
     */
    constructor(data, layout = CAR_LAYOUT, options = { autoPadding: true }) {
        if (data.id) {
            this.id = new BN(data.id);
        }
        else if (data.metadata && data.metadata) {
            this.coreMetadata = {};
            for (const key in data.metadata) {
                this.coreMetadata[key] = `${data.metadata[key]}`;
            }
        }
        else {
            throw new Error(`Not supporting ${data} in constructor`);
        }
        this.autoPadding = options?.autoPadding;
        this.layout = [...layout];
    }
    /**
     * @param {string|BN} id
     * @param {BitsLayout} layout
     */
    static fromID(id, layout) {
        return new Token({ id }, layout);
    }
    getLayout() {
        return this.layout;
    }
    /**
     * @param {object} coreMetadata
     * @param {BitsLayout} layout
     */
    static fromMetadata(coreMetadata, layout) {
        return new Token({ metadata: coreMetadata }, layout);
    }
    getTokenID() {
        if (!this.id) {
            const core = { ...this.coreMetadata };
            this.layout.forEach(({ name }) => {
                if (name.startsWith("padding") && core[name] == undefined) {
                    core[name] = new bigInt(0);
                }
                else {
                    core[name] = new bigInt(core[name]);
                }
            });
            this.id = new BN(bitJs.encode(this.layout, core).toString());
        }
        return this.id;
    }
    getCoreMetadata() {
        if (!this.coreMetadata) {
            const id = new bigInt(this.id.toString());
            const decodedObj = bitJs.decode(this.layout, id);
            const core = Object.keys(decodedObj)
                .reduce((acc, name) => {
                if (!name.startsWith("padding")) {
                    acc[name] = decodedObj[name].value.toString();
                }
                return acc;
            }, {});
            this.coreMetadata = core;
        }
        return this.coreMetadata;
    }
    /**
     * @deprecated Use getMatchValue instead.
     * @async
     * @param  {...string} args
     * @returns {BN}
     */
    getBitMask(...args) {
        const layoutMask = getLayoutMask(this.layout, ...args);
        return layoutMask.and(this.getTokenID());
    }
    /**
     * @async
     * @param  {...string} args
     * @returns {BN}
     */
    getMatchValue(...args) {
        const layoutMask = getLayoutMask(this.layout, ...args);
        return layoutMask.and(this.getTokenID());
    }
    /**
     *
     * @param {BN|Token} token
     * @param  {...string} fields
     * @returns {Boolean}
     */
    isEqualTo(token, ...fields) {
        if (token.constructor.name == "Token") {
            token = token.getTokenID();
        }
        const layoutMask = getLayoutMask(this.layout, ...fields);
        return token.and(layoutMask).eq(this.getTokenID().and(layoutMask));
    }
    /**
     *
     * @param {string|BN} value
     * @returns {Boolean}
     */
    isMatchedTo(value) {
        if (typeof value === 'string') {
            value = new BN(value);
        }
        let currentBit = 0;
        const tokenId = this.getTokenID();
        return this.layout.every(({ _, bits }) => {
            const mask = (new BN(2)).pow(new BN(bits)).sub(new BN(1)).iushln(currentBit);
            currentBit += bits;
            const fieldBitMask = value.and(mask);
            return fieldBitMask.isZero() || tokenId.and(mask).eq(fieldBitMask);
        });
    }
}
module.exports = Token;
//# sourceMappingURL=Token.js.map