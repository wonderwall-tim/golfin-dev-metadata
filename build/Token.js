"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
var bits_js_1 = require("bits.js");
var bn_js_1 = require("bn.js");
var big_integer_1 = require("big-integer");
var Layout_js_1 = require("./Layout.js");
var Token = /** @class */ (function () {
    /**
     *
     * @param {{metadata?:object,id?:BN}} data
     * @param {{name:string, bits: number}} layout
     */
    function Token(data, layout, options) {
        if (layout === void 0) { layout = Layout_js_1.CAR_LAYOUT; }
        if (options === void 0) { options = { autoPadding: true }; }
        if (data.id) {
            this.id = new bn_js_1.default(data.id);
        }
        else if (data.metadata && data.metadata) {
            this.coreMetadata = {};
            for (var key in data.metadata) {
                this.coreMetadata[key] = "".concat(data.metadata[key]);
            }
        }
        else {
            throw new Error("Not supporting ".concat(data, " in constructor"));
        }
        this.autoPadding = options === null || options === void 0 ? void 0 : options.autoPadding;
        this.layout = __spreadArray([], layout, true);
    }
    /**
     * @param {string|BN} id
     * @param {BitsLayout} layout
     */
    Token.fromID = function (id, layout) {
        return new Token({ id: id }, layout);
    };
    Token.prototype.getLayout = function () {
        return this.layout;
    };
    /**
     * @param {object} coreMetadata
     * @param {BitsLayout} layout
     */
    Token.fromMetadata = function (coreMetadata, layout) {
        return new Token({ metadata: coreMetadata }, layout);
    };
    Token.prototype.getTokenID = function () {
        if (!this.id) {
            var core_1 = __assign({}, this.coreMetadata);
            this.layout.forEach(function (_a) {
                var name = _a.name;
                if (name.startsWith("padding") && core_1[name] == undefined) {
                    core_1[name] = new big_integer_1.default(0);
                }
                else {
                    core_1[name] = new big_integer_1.default(core_1[name]);
                }
            });
            this.id = new bn_js_1.default(bits_js_1.default.encode(this.layout, core_1).toString());
        }
        return this.id;
    };
    Token.prototype.getCoreMetadata = function () {
        if (!this.coreMetadata) {
            var id = new big_integer_1.default(this.id.toString());
            var decodedObj_1 = bits_js_1.default.decode(this.layout, id);
            var core = Object.keys(decodedObj_1)
                .reduce(function (acc, name) {
                if (!name.startsWith("padding")) {
                    acc[name] = decodedObj_1[name].value.toString();
                }
                return acc;
            }, {});
            this.coreMetadata = core;
        }
        return this.coreMetadata;
    };
    /**
     * @deprecated Use getMatchValue instead.
     * @async
     * @param  {...string} args
     * @returns {BN}
     */
    Token.prototype.getBitMask = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var layoutMask = Layout_js_1.getLayoutMask.apply(void 0, __spreadArray([this.layout], args, false));
        return layoutMask.and(this.getTokenID());
    };
    /**
     * @async
     * @param  {...string} args
     * @returns {BN}
     */
    Token.prototype.getMatchValue = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var layoutMask = Layout_js_1.getLayoutMask.apply(void 0, __spreadArray([this.layout], args, false));
        return layoutMask.and(this.getTokenID());
    };
    /**
     *
     * @param {BN|Token} token
     * @param  {...string} fields
     * @returns {Boolean}
     */
    Token.prototype.isEqualTo = function (token) {
        var fields = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fields[_i - 1] = arguments[_i];
        }
        if (token.constructor.name == "Token") {
            token = token.getTokenID();
        }
        var layoutMask = Layout_js_1.getLayoutMask.apply(void 0, __spreadArray([this.layout], fields, false));
        return token.and(layoutMask).eq(this.getTokenID().and(layoutMask));
    };
    /**
     *
     * @param {string|BN} value
     * @returns {Boolean}
     */
    Token.prototype.isMatchedTo = function (value) {
        if (typeof value === 'string') {
            value = new bn_js_1.default(value);
        }
        var currentBit = 0;
        var tokenId = this.getTokenID();
        return this.layout.every(function (_a) {
            var _ = _a._, bits = _a.bits;
            var mask = (new bn_js_1.default(2)).pow(new bn_js_1.default(bits)).sub(new bn_js_1.default(1)).iushln(currentBit);
            currentBit += bits;
            var fieldBitMask = value.and(mask);
            return fieldBitMask.isZero() || tokenId.and(mask).eq(fieldBitMask);
        });
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=Token.js.map