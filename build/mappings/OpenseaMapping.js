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
var BaseMapping = require('./BaseMapping.js');
var Mapping = require('./Mapping.js');
var urls = require('../config.js');
var OpenseaMapping = /** @class */ (function (_super) {
    __extends(OpenseaMapping, _super);
    function OpenseaMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenseaMapping.prototype.getPrerequisiteMappings = function () {
        return [new BaseMapping()];
    };
    OpenseaMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (!context.coreOnly) {
            metadata.attributes = [
                { trait_type: "rarity", value: metadata.rarity },
                { trait_type: "model", value: metadata.model },
                { trait_type: "material", value: metadata.material },
                { trait_type: "type", value: metadata.type },
                { trait_type: "brand", value: metadata.brand },
                { trait_type: "flex", value: metadata.flex },
                { trait_type: "loft", value: metadata.loft },
                { trait_type: "weight", value: "".concat(metadata.core.weight, "kg") },
                { trait_type: "serial_number", value: metadata.core.serialNumber }
            ];
            if ((metadata.core.handling && metadata.core.topSpeed && metadata.core.acceleration)) {
                metadata.attributes.push({
                    display_type: "boost_number",
                    trait_type: "durability",
                    value: parseInt(metadata.core.durability),
                    max_value: 1001,
                }, {
                    display_type: "boost_number",
                    trait_type: "recovery",
                    value: parseInt(metadata.core.recovery),
                    max_value: 1001,
                }, {
                    display_type: "boost_number",
                    trait_type: "spin",
                    value: parseInt(metadata.core.spin),
                    max_value: 1001,
                }, {
                    display_type: "boost_number",
                    trait_type: "accuracy",
                    value: parseInt(metadata.core.accuracy),
                    max_value: 1001,
                }, {
                    display_type: "boost_number",
                    trait_type: "power",
                    value: parseInt(metadata.core.power),
                    max_value: 1001,
                });
            }
        }
        metadata.external_url = urls[context.network].external_url;
        return metadata;
    };
    return OpenseaMapping;
}(Mapping));
;
module.exports = OpenseaMapping;
//# sourceMappingURL=OpenseaMapping.js.map