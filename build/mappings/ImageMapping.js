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
var valueById = require('./values/images/valueById.js');
var urls = require('../config.js');
var Mapping = require('./Mapping.js');
var TypeMapping = require('./TypeMapping.js');
var MaterialMapping = require('./MaterialMapping.js');
var NameMapping = require('./NameMapping.js');
var DescriptionMapping = require('./DescriptionMapping.js');
var ImageMapping = /** @class */ (function (_super) {
    __extends(ImageMapping, _super);
    function ImageMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageMapping.prototype.getPrerequisiteMappings = function () {
        return [new TypeMapping(), new MaterialMapping(), new NameMapping(), new DescriptionMapping()];
    };
    ImageMapping.prototype.getValues = function () {
        return valueById;
    };
    ImageMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.image == null || metadata.core.image == null;
    };
    ImageMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        var imageURLKey = "".concat(metadata.core.type, "_").concat(metadata.core.material, "_").concat(metadata.core.item, "_").concat(metadata.core.appearance);
        var imageMapKey = "T".concat(metadata.core.type, "_M").concat(metadata.core.material, "_I").concat(metadata.core.item, "_A").concat(metadata.core.appearance);
        var image = this.getValuesFromKey(imageMapKey);
        metadata.image = "".concat(urls[context.network].image_url, "/GOLFIN-").concat(imageURLKey).concat(image);
        return metadata;
    };
    return ImageMapping;
}(Mapping));
;
module.exports = ImageMapping;
//# sourceMappingURL=ImageMapping.js.map