export class OpenseaMapping extends Mapping {
    getPrerequisiteMappings(): BaseMapping[];
    build(metadata: any, context: any): any;
}
import { Mapping } from "./Mapping.js";
import { BaseMapping } from "./BaseMapping.js";
