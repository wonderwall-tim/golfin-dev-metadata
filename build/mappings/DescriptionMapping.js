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
exports.DescriptionMapping = void 0;
var valueById_js_1 = require("./values/descriptions/valueById.js");
var Mapping_js_1 = require("./Mapping.js");
var MaterialMapping_js_1 = require("./MaterialMapping.js");
var DescriptionMapping = /** @class */ (function (_super) {
    __extends(DescriptionMapping, _super);
    function DescriptionMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionMapping.prototype.getPrerequisiteMappings = function () {
        return [new MaterialMapping_js_1.MaterialMapping()];
    };
    DescriptionMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    DescriptionMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.item == null || metadata.core.item == null;
    };
    DescriptionMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        var material = metadata.core.material;
        var item = metadata.core.item;
        var appearance = metadata.core.appearance;
        try {
            metadata.description = this.getValuesFromKey("M".concat(material, "_I").concat(item, "_L").concat(appearance));
        }
        catch (e) {
            metadata.description = this.getValuesFromKey("M".concat(material, "_I").concat(item));
        }
        return metadata;
    };
    return DescriptionMapping;
}(Mapping_js_1.Mapping));
exports.DescriptionMapping = DescriptionMapping;
;
//# sourceMappingURL=DescriptionMapping.js.map