import { Mapping } from "./Mapping";
/* import { ManufacturerMapping } from "./ManufacturerMapping";
import { CollectionMapping } from "./CollectionMapping";
import { ClassMapping } from "./ClassMapping"; */
import { RarityMapping } from "./RarityMapping";
/* import { YearMapping } from "./YearMapping";
import { RacingAttributesMapping } from "./RacingAttributesMapping"; */
import { DescriptionMapping } from "./DescriptionMapping";
import { MaterialMapping } from "./MaterialMapping";
import { LoftMapping } from "./LoftMapping";
import { FlexMapping } from "./FlexMapping";
import { BrandMapping } from "./BrandMapping";
import { ModelMapping } from "./ModelMapping";
import { ImageMapping } from "./ImageMapping";
import { NameMapping } from "./NameMapping";
import { TypeMapping } from "./TypeMapping";

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
            /*        new YearMapping(),
                   new RacingAttributesMapping(),   */
            new NameMapping(),
            new DescriptionMapping(),
            new ImageMapping()
            /*  new VideoMapping() */
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
