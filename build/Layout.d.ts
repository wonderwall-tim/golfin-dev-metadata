/**
* @typedef {{name:string, bits: number}} BitsLayout
* @typedef {BitsLayout[]} Layout
*/
export function getLayoutMask(fullLayout: any, ...layoutBits: any[]): any;
/**
*
* @param {string|BN} value
* @returns {string[]}
*/
export function extractFieldNames(fullLayout: any, value: string | BN, base?: number): string[];
export const TOKEN_TYPE_LAYOUT: {
    name: string;
    bits: number;
}[];
export const CAR_COLLECTION_LAYOUT: {
    name: string;
    bits: number;
}[];
export const CAR_LAYOUT: {
    name: string;
    bits: number;
}[];
export type BitsLayout = {
    name: string;
    bits: number;
};
export type Layout = BitsLayout[];
