export class Mapping {
    getName(): string;
    getValues(): {};
    getValuesFromKey(key: any): any;
    getKeyFromValue(value: any): string;
    getPrerequisiteMappings(): any[];
    shouldBuild(metadata: any): boolean;
    /**
     * @param {Metadata} metadata
     * @param {{tokenId:String,mappings:String[]}} buildContext
     * @returns Metadata
     */
    build(metadata: Metadata, buildContext?: {
        tokenId: string;
        mappings: string[];
    }): any;
}
import { Metadata } from "../Metadata.js";
