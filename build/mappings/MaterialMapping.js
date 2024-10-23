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
var valueById = require('./values/materials/valueById.js');
var Mapping = require('./Mapping.js');
var MaterialMapping = /** @class */ (function (_super) {
    __extends(MaterialMapping, _super);
    function MaterialMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialMapping.prototype.getValues = function () {
        return valueById;
    };
    MaterialMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.material == null || metadata.core.material == null;
    };
    MaterialMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.material == null) {
            metadata.core.material = this.getKeyFromValue(metadata.material);
        }
        else if (metadata.material == null) {
            metadata.material = this.getValuesFromKey(metadata.core.material);
        }
        return metadata;
    };
    return MaterialMapping;
}(Mapping));
;
module.exports = MaterialMapping;
//# sourceMappingURL=MaterialMapping.js.map