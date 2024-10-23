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
var valueById = require('./values/brands/valueById.js');
var Mapping = require('./Mapping.js');
var BrandMapping = /** @class */ (function (_super) {
    __extends(BrandMapping, _super);
    function BrandMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandMapping.prototype.getValues = function () {
        return valueById;
    };
    BrandMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.brand == null || metadata.core.brand == null;
    };
    BrandMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.brand == null) {
            metadata.core.brand = this.getKeyFromValue(metadata.brand);
        }
        else if (metadata.brand == null) {
            metadata.brand = this.getValuesFromKey(metadata.core.brand);
        }
        return metadata;
    };
    return BrandMapping;
}(Mapping));
;
module.exports = BrandMapping;
//# sourceMappingURL=BrandMapping.js.map