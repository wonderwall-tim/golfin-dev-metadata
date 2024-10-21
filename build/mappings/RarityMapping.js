"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RarityMapping = void 0;
var valueById_js_1 = require("../common/mappings/rarities/valueById.js");
var Mapping_js_1 = require("./Mapping.js");
var RarityMapping = /** @class */ (function (_super) {
    __extends(RarityMapping, _super);
    function RarityMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RarityMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    RarityMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.rarity == null || metadata.core.rarity == null;
    };
    RarityMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.rarity == null) {
            metadata.core.rarity = this.getKeyFromValue(metadata.rarity);
        }
        else if (metadata.rarity == null) {
            metadata.rarity = this.getValuesFromKey(metadata.core.rarity);
        }
        return metadata;
    };
    return RarityMapping;
}(Mapping_js_1.Mapping));
exports.RarityMapping = RarityMapping;
;
//# sourceMappingURL=RarityMapping.js.map