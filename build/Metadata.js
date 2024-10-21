"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
var Token_js_1 = require("./Token.js");
var OpenseaMapping_js_1 = require("./mappings/OpenseaMapping.js");
/* import { BitsLayout } from './Layout.js'; */
var Metadata = /** @class */ (function () {
    /**
     *
     * @param {Token} token
     */
    function Metadata(token) {
        this.token = token;
        this.metadata = {};
    }
    Metadata.prototype.getToken = function () {
        return this.token;
    };
    /**
     *
     * @param {object} json
     * @param {{name:string, bits: number}} layout
     * @param {string} network
     */
    Metadata.fromJSON = function (json, layout, network) {
        if (network === void 0) { network = "137"; }
        json.core = json.core || {};
        var metadata = new OpenseaMapping_js_1.OpenseaMapping()
            .build(json, {
            network: network,
            coreOnly: true
        });
        var token = Token_js_1.Token.fromMetadata(metadata.core, layout);
        return new Metadata(token);
    };
    Metadata.prototype.toJSON = function (network) {
        if (network === void 0) { network = "137"; }
        if (!this.metadata[network]) {
            this.metadata[network] = new OpenseaMapping_js_1.OpenseaMapping()
                .build({ core: this.token.getCoreMetadata() }, {
                network: network,
                tokenID: this.token.getTokenID()
            });
        }
        return this.metadata[network];
    };
    return Metadata;
}());
exports.Metadata = Metadata;
;
//# sourceMappingURL=Metadata.js.map