import { valueById } from "./values/images/valueById.js";
import { urls } from "../config.js";
import { Mapping } from "./Mapping.js";
import { TypeMapping } from "./TypeMapping.js";
import { MaterialMapping } from "./MaterialMapping.js";
import { NameMapping } from "./NameMapping.js";
import { DescriptionMapping } from "./DescriptionMapping.js";

export class ImageMapping extends Mapping {

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
        const imageURLKey = `${metadata.core.type}_${metadata.core.material}_${metadata.core.item}_${metadata.core.appearance}`
        const imageMapKey = `T${metadata.core.type}_M${metadata.core.material}_I${metadata.core.item}_A${metadata.core.appearance}`;
        
        const image = this.getValuesFromKey(imageMapKey);
        metadata.image =  `${urls[context.network].image_url}/GOLFIN-${imageURLKey}${image}`;
        return metadata;
    }

};
