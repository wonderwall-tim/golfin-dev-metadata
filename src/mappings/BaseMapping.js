const Mapping = require('./Mapping.js')
const RarityMapping = require('./RarityMapping.js')
const DescriptionMapping = require('./DescriptionMapping.js')
const MaterialMapping = require('./MaterialMapping.js')
const LoftMapping = require('./LoftMapping.js')
const FlexMapping = require('./FlexMapping.js')
const BrandMapping = require('./BrandMapping.js')
const ModelMapping = require('./ModelMapping.js')
const ImageMapping = require('./ImageMapping.js')
const NameMapping = require('./NameMapping.js')
const TypeMapping = require('./TypeMapping.js')

class BaseMapping extends Mapping {

    getPrerequisiteMappings() {
        return [
            new BrandMapping(), // B
            new TypeMapping(), // T
            new FlexMapping(), // F
            new LoftMapping(), // L
            new MaterialMapping(), // M
            new ModelMapping(), // M
            new RarityMapping(),
            new NameMapping(),
            new DescriptionMapping(),
            new ImageMapping()
        ];
    }

    build(metadata, context) {
        metadata = super.build(metadata, context);
        if (!context.coreOnly) {
            metadata.id = context.tokenID.toString();
        }
        return metadata;
    }

};


module.exports = BaseMapping