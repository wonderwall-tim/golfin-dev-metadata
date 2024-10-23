export = Metadata;
declare class Metadata {
    /**
     *
     * @param {object} json
     * @param {{name:string, bits: number}} layout
     * @param {string} network
     */
    static fromJSON(json: object, layout: {
        name: string;
        bits: number;
    }, network?: string): Metadata;
    /**
     *
     * @param {Token} token
     */
    constructor(token: Token);
    token: Token;
    metadata: {};
    getToken(): Token;
    toJSON(network?: string): any;
}
