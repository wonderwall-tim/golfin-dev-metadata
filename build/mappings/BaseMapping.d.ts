export = BaseMapping;
declare class BaseMapping extends Mapping {
    getPrerequisiteMappings(): (RarityMapping | MaterialMapping | DescriptionMapping | LoftMapping | FlexMapping | BrandMapping | ModelMapping | TypeMapping | NameMapping | ImageMapping)[];
    build(metadata: any, context: any): any;
}
import Mapping = require("./Mapping.js");
import RarityMapping = require("./RarityMapping.js");
import MaterialMapping = require("./MaterialMapping.js");
import DescriptionMapping = require("./DescriptionMapping.js");
import LoftMapping = require("./LoftMapping.js");
import FlexMapping = require("./FlexMapping.js");
import BrandMapping = require("./BrandMapping.js");
import ModelMapping = require("./ModelMapping.js");
import TypeMapping = require("./TypeMapping.js");
import NameMapping = require("./NameMapping.js");
import ImageMapping = require("./ImageMapping.js");
