export = ImageMapping;
declare class ImageMapping extends Mapping {
    getPrerequisiteMappings(): (MaterialMapping | DescriptionMapping | TypeMapping | NameMapping)[];
    getValues(): {
        '*': string;
        T1_M2_I1_A1: string;
        T1_M2_I2_A1: string;
        T1_M2_I2_A2: string;
        T1_M2_I2_A3: string;
        T1_M2_I2_A4: string;
        T1_M2_I2_A5: string;
        T1_M2_I3_A1: string;
        T1_M2_I3_A2: string;
        T1_M2_I3_A3: string;
        T1_M2_I3_A4: string;
        T1_M2_I3_A5: string;
        T1_M2_I3_A6: string;
        T1_M2_I4_A1: string;
        T1_M2_I4_A2: string;
    };
    shouldBuild(metadata: any, context: any): boolean;
    build(metadata: any, context: any): any;
}
import Mapping = require("./Mapping.js");
import MaterialMapping = require("./MaterialMapping.js");
import DescriptionMapping = require("./DescriptionMapping.js");
import TypeMapping = require("./TypeMapping.js");
import NameMapping = require("./NameMapping.js");
