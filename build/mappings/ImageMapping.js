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
exports.ImageMapping = void 0;
var valueById_js_1 = require("./values/images/valueById.js");
var config_js_1 = require("../config.js");
var Mapping_js_1 = require("./Mapping.js");
var TypeMapping_js_1 = require("./TypeMapping.js");
var MaterialMapping_js_1 = require("./MaterialMapping.js");
var NameMapping_js_1 = require("./NameMapping.js");
var DescriptionMapping_js_1 = require("./DescriptionMapping.js");
var ImageMapping = /** @class */ (function (_super) {
    __extends(ImageMapping, _super);
    function ImageMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageMapping.prototype.getPrerequisiteMappings = function () {
        return [new TypeMapping_js_1.TypeMapping(), new MaterialMapping_js_1.MaterialMapping(), new NameMapping_js_1.NameMapping(), new DescriptionMapping_js_1.DescriptionMapping()];
    };
    ImageMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    ImageMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.image == null || metadata.core.image == null;
    };
    ImageMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        var imageURLKey = "".concat(metadata.core.type, "_").concat(metadata.core.material, "_").concat(metadata.core.item, "_").concat(metadata.core.appearance);
        var imageMapKey = "T".concat(metadata.core.type, "_M").concat(metadata.core.material, "_I").concat(metadata.core.item, "_A").concat(metadata.core.appearance);
        var image = this.getValuesFromKey(imageMapKey);
        metadata.image = "".concat(config_js_1.urls[context.network].image_url, "/GOLFIN-").concat(imageURLKey).concat(image);
        return metadata;
    };
    return ImageMapping;
}(Mapping_js_1.Mapping));
exports.ImageMapping = ImageMapping;
;
//# sourceMappingURL=ImageMapping.js.map