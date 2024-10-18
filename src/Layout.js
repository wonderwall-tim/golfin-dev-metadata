import BN from 'bn.js';
import bitJs from 'bits.js';
import bigInt from "big-integer";

const CAR_TOKEN_BITS = [
    { name: "serialNumber", bits: 8 }, // New field for serial number
    
    { name: "item", bits: 16 },         // Existing field
    { name: "apperance", bits: 12 },     // Updated field for appearance

    { name: "padding3", bits: 36 },     // Padding

    { name: "power", bits: 12 },        // New field for power
    { name: "accuracy", bits: 12 },     // New field for accuracy
    { name: "spin", bits: 12 },         // New field for spin
    { name: "recovery", bits: 12 },     // New field for recovery
    { name: "durability", bits: 12 },   // New field for durability
    
    { name: "weight", bits: 12 },       // New field for weight
    { name: "model", bits: 8 },         // New field for model
    { name: "rarity", bits: 8 },        // Existing field for rarity
    { name: "brand", bits: 8 },         // New field for brand
    { name: "flex", bits: 8 },          // New field for flex
    
    { name: "padding3", bits: 24 },     // Padding
    
    { name: "loft", bits: 8 },          // New field for loft

    { name: "padding2", bits: 16 }      // Padding
];

const CAR_COLLECTION_BITS = [
    { name: "padding1", bits: 3 },
    { name: "material", bits: 16 }
];

const TOKEN_TYPE_BITS = [
    { name: "type", bits: 12 },
    { name: "nfFlag", bits: 1 }
];

export const TOKEN_TYPE_LAYOUT = [
    { name: "padding", bits: 243 }, ...TOKEN_TYPE_BITS
];

export const CAR_COLLECTION_LAYOUT = [...CAR_COLLECTION_BITS, ...TOKEN_TYPE_BITS];
export const CAR_LAYOUT = [...CAR_TOKEN_BITS, ...CAR_COLLECTION_LAYOUT];

/**
* @typedef {{name:string, bits: number}} BitsLayout
* @typedef {BitsLayout[]} Layout
*/
export function getLayoutMask(fullLayout, ...layoutBits) {
    const bnEntries = fullLayout.map(item => {
        if (layoutBits.includes(item.name)) {
            const value = (new BN(2)).pow(new BN(item.bits)).sub(new BN(1));
            return [item.name, value];
        } else {
            return [item.name, new BN(0)];
        }
    });

    const values = Object.fromEntries(bnEntries.map(([arg, value]) => [arg, new bigInt(value.toString(10))]));
    return new BN(bitJs.encode(fullLayout, values).toString());
}

/**
* 
* @param {string|BN} value
* @returns {string[]}
*/
export function extractFieldNames(fullLayout, value, base = 10) {
    value = new BN(value, base);
    let currentBit = 0;
    return fullLayout.filter(({ bits }) => {
        const mask = (new BN(2)).pow(new BN(bits)).sub(new BN(1)).iushln(currentBit);
        currentBit += bits;
        const fieldBitMask = value.and(mask);
        return !fieldBitMask.isZero();
    }).map(({ name }) => name);
}
