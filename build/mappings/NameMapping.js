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
exports.NameMapping = void 0;
var valueById_js_1 = require("./values/names/valueById.js");
var Mapping_js_1 = require("./Mapping.js");
var MaterialMapping_js_1 = require("./MaterialMapping.js");
var NameMapping = /** @class */ (function (_super) {
    __extends(NameMapping, _super);
    function NameMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NameMapping.prototype.getPrerequisiteMappings = function () {
        return [new MaterialMapping_js_1.MaterialMapping()];
    };
    NameMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    NameMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.item == null || metadata.core.item == null;
    };
    NameMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        var item = metadata.core.item;
        var material = metadata.core.material;
        var appearance = metadata.core.appearance;
        try {
            metadata.name = this.getValuesFromKey("M".concat(material, "_I").concat(item, "_L").concat(appearance));
        }
        catch (e) {
            metadata.name = this.getValuesFromKey("M".concat(material, "_I").concat(item));
        }
        return metadata;
    };
    return NameMapping;
}(Mapping_js_1.Mapping));
exports.NameMapping = NameMapping;
;
//# sourceMappingURL=NameMapping.js.map