export class BaseMapping extends Mapping {
    getPrerequisiteMappings(): (RarityMapping | MaterialMapping | DescriptionMapping | LoftMapping | FlexMapping | BrandMapping | ModelMapping | TypeMapping | NameMapping | ImageMapping)[];
    build(metadata: any, context: any): any;
}
import { Mapping } from "./Mapping.js";
import { RarityMapping } from "./RarityMapping.js";
import { MaterialMapping } from "./MaterialMapping.js";
import { DescriptionMapping } from "./DescriptionMapping.js";
import { LoftMapping } from "./LoftMapping.js";
import { FlexMapping } from "./FlexMapping.js";
import { BrandMapping } from "./BrandMapping.js";
import { ModelMapping } from "./ModelMapping.js";
import { TypeMapping } from "./TypeMapping.js";
import { NameMapping } from "./NameMapping.js";
import { ImageMapping } from "./ImageMapping.js";
