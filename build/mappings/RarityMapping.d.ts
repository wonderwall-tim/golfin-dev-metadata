export class RarityMapping extends Mapping {
    getValues(): {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
    };
    shouldBuild(metadata: any, context: any): boolean;
    build(metadata: any, context: any): any;
}
import { Mapping } from "./Mapping.js";
