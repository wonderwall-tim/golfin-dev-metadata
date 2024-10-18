import { Metadata } from "../src/Metadata.js";
import { Token } from '../src/Token';
import { CAR_LAYOUT } from "../src/Layout";

const core = {
    serialNumber: "4", // INPUT
    item: "2", // INPUT, affect image, I
    apperance: "5", // INPUT, affect image, A

    power: "860", // power
    accuracy: "500", // acc
    spin: "600", // spin
    recovery: "200", // spin
    durability: "340", // Durability
    weight: "7", // recovery

    model: "1", // from mapping
    rarity: "4", // INPUT, but can be mapped
    brand: "5", // from mapping 
    flex: "3", // from mapping
    loft: "1", // from mapping
    material: "2", // from mapping
    
    type: "1", // from mapping
    nfFlag: "1" // always 1
}

export const toJSON = (core) => {
    const token = Token.fromMetadata(core, CAR_LAYOUT);
    const metadata = new Metadata(token).toJSON();
    console.log(`---------------------"${metadata.name}"-----------------------`);
    console.log(`TokenID for "${metadata.name}": ${token.getTokenID().toString(10)}`);
    console.dir(metadata);
    console.log(`------------------========================---------------------`);
}

toJSON(core);
