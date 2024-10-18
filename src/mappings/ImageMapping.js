import { valueById } from "./values/images";
import { urls } from "../config";
import { Mapping } from "./Mapping";
import { TypeMapping } from "./TypeMapping";
import { MaterialMapping } from "./MaterialMapping";
import { NameMapping } from "./NameMapping";
import { DescriptionMapping } from "./DescriptionMapping";

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
        metadata.image =  `${urls[context.network].image_url}/REVV-${imageURLKey}${image}`;
        return metadata;
    }

};
