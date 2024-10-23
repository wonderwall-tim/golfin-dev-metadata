const BaseMapping = require('./BaseMapping.js');
const Mapping = require('./Mapping.js');
const urls = require('../config.js');
class OpenseaMapping extends Mapping {
    getPrerequisiteMappings() {
        return [new BaseMapping()];
    }
    build(metadata, context) {
        metadata = super.build(metadata, context);
        if (!context.coreOnly) {
            metadata.attributes = [
                { trait_type: "rarity", value: metadata.rarity },
                { trait_type: "model", value: metadata.model },
                { trait_type: "material", value: metadata.material },
                { trait_type: "type", value: metadata.type },
                { trait_type: "brand", value: metadata.brand },
                { trait_type: "flex", value: metadata.flex },
                { trait_type: "loft", value: metadata.loft },
                { trait_type: "weight", value: `${metadata.core.weight}kg` },
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
    }
}
;
module.exports = OpenseaMapping;
//# sourceMappingURL=OpenseaMapping.js.map