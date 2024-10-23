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
var valueById = require('./values/models/valueById.js');
var Mapping = require('./Mapping.js');
var ModelMapping = /** @class */ (function (_super) {
    __extends(ModelMapping, _super);
    function ModelMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelMapping.prototype.getValues = function () {
        return valueById;
    };
    ModelMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.material == null || metadata.core.material == null;
    };
    ModelMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.model == null) {
            metadata.core.model = this.getKeyFromValue(metadata.model);
        }
        else if (metadata.model == null) {
            console.log('model second');
            console.log(this.getValuesFromKey(metadata.core.model));
            metadata.model = this.getValuesFromKey(metadata.core.model);
        }
        return metadata;
    };
    return ModelMapping;
}(Mapping));
;
module.exports = ModelMapping;
//# sourceMappingURL=ModelMapping.js.map