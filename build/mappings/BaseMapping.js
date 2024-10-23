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
var Mapping = require('./Mapping.js');
var RarityMapping = require('./RarityMapping.js');
var DescriptionMapping = require('./DescriptionMapping.js');
var MaterialMapping = require('./MaterialMapping.js');
var LoftMapping = require('./LoftMapping.js');
var FlexMapping = require('./FlexMapping.js');
var BrandMapping = require('./BrandMapping.js');
var ModelMapping = require('./ModelMapping.js');
var ImageMapping = require('./ImageMapping.js');
var NameMapping = require('./NameMapping.js');
var TypeMapping = require('./TypeMapping.js');
var BaseMapping = /** @class */ (function (_super) {
    __extends(BaseMapping, _super);
    function BaseMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseMapping.prototype.getPrerequisiteMappings = function () {
        return [
            new BrandMapping(),
            new TypeMapping(),
            new FlexMapping(),
            new LoftMapping(),
            new MaterialMapping(),
            new ModelMapping(),
            new RarityMapping(),
            new NameMapping(),
            new DescriptionMapping(),
            new ImageMapping()
        ];
    };
    BaseMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (!context.coreOnly) {
            metadata.id = context.tokenID.toString();
        }
        return metadata;
    };
    return BaseMapping;
}(Mapping));
;
module.exports = BaseMapping;
//# sourceMappingURL=BaseMapping.js.map