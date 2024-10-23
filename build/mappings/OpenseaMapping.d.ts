export = OpenseaMapping;
declare class OpenseaMapping extends Mapping {
    getPrerequisiteMappings(): BaseMapping[];
    build(metadata: any, context: any): any;
}
import Mapping = require("./Mapping.js");
import BaseMapping = require("./BaseMapping.js");
