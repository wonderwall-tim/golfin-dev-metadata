const valueById = require('./values/images/valueById.js');
const urls = require('../config.js');
const Mapping = require('./Mapping.js');
const TypeMapping = require('./TypeMapping.js');
const MaterialMapping = require('./MaterialMapping.js');
const NameMapping = require('./NameMapping.js');
const DescriptionMapping = require('./DescriptionMapping.js');
class ImageMapping extends Mapping {
    getPrerequisiteMappings() {
        return [new TypeMapping(), new MaterialMapping(), new NameMapping(), new DescriptionMapping()];
    }
    getValues() {
        return valueById;
    }
    shouldBuild(metadata, context) {
        return metadata.image == null || metadata.core.image == null;
    }
    build(metadata, context) {
        metadata = super.build(metadata, context);
        const imageURLKey = `${metadata.core.type}_${metadata.core.material}_${metadata.core.item}_${metadata.core.appearance}`;
        const imageMapKey = `T${metadata.core.type}_M${metadata.core.material}_I${metadata.core.item}_A${metadata.core.appearance}`;
        const image = this.getValuesFromKey(imageMapKey);
        metadata.image = `${urls[context.network].image_url}/GOLFIN-${imageURLKey}${image}`;
        return metadata;
    }
}
;
module.exports = ImageMapping;
//# sourceMappingURL=ImageMapping.js.map