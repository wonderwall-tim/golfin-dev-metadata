import { Mapping } from "./Mapping.js";
/* import { ManufacturerMapping } from "./ManufacturerMapping";
import { CollectionMapping } from "./CollectionMapping";
import { ClassMapping } from "./ClassMapping"; */
import { RarityMapping } from "./RarityMapping.js";
/* import { YearMapping } from "./YearMapping";
import { RacingAttributesMapping } from "./RacingAttributesMapping"; */
import { DescriptionMapping } from "./DescriptionMapping.js";
import { MaterialMapping } from "./MaterialMapping.js";
import { LoftMapping } from "./LoftMapping.js";
import { FlexMapping } from "./FlexMapping.js";
import { BrandMapping } from "./BrandMapping.js";
import { ModelMapping } from "./ModelMapping.js";
import { ImageMapping } from "./ImageMapping.js";
import { NameMapping } from "./NameMapping.js";
import { TypeMapping } from "./TypeMapping.js";

export class BaseMapping extends Mapping {

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
