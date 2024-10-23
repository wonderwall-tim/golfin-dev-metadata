export = Metadata;
declare class Metadata {
    /**
     *
     * @param {object} json
     * @param {BitsLayout} layout
     * @param {string} network
     */
    static fromJSON(json: object, layout: typeof BitsLayout, network?: string): Metadata;
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
import BitsLayout = require("./Layout.js");
