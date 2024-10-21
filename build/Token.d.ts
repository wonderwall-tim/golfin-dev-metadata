export class Token {
    /**
     * @param {string|BN} id
     * @param {BitsLayout} layout
     */
    static fromID(id: string | BN, layout: BitsLayout): Token;
    /**
     * @param {object} coreMetadata
     * @param {BitsLayout} layout
     */
    static fromMetadata(coreMetadata: object, layout: BitsLayout): Token;
    /**
     *
     * @param {{metadata?:object,id?:BN}} data
     * @param {{name:string, bits: number}} layout
     */
    constructor(data: {
        metadata?: object;
        id?: BN;
    }, layout?: {
        name: string;
        bits: number;
    }, options?: {
        autoPadding: boolean;
    });
    id: any;
    coreMetadata: {};
    autoPadding: boolean;
    layout: any[];
    getLayout(): any[];
    getTokenID(): any;
    getCoreMetadata(): {};
    /**
     * @deprecated Use getMatchValue instead.
     * @async
     * @param  {...string} args
     * @returns {BN}
     */
    getBitMask(...args: string[]): BN;
    /**
     * @async
     * @param  {...string} args
     * @returns {BN}
     */
    getMatchValue(...args: string[]): BN;
    /**
     *
     * @param {BN|Token} token
     * @param  {...string} fields
     * @returns {Boolean}
     */
    isEqualTo(token: BN | Token, ...fields: string[]): boolean;
    /**
     *
     * @param {string|BN} value
     * @returns {Boolean}
     */
    isMatchedTo(value: string | BN): boolean;
}