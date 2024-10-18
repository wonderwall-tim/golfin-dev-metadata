import { Token } from './Token';
import { OpenseaMapping } from './mappings/OpenseaMapping';
import { BitsLayout } from './Layout';
export class Metadata {
  /**
   * 
   * @param {Token} token 
   */
  constructor(token) {
   this.token = token;
   this.metadata = {}; 
  }

  getToken() {
    return this.token;
  }

  /**
   * 
   * @param {object} json 
   * @param {BitsLayout} layout 
   * @param {string} network
   */
  static fromJSON(json, layout, network = "137") {
    json.core = json.core || {};
    const metadata =  new OpenseaMapping()
        .build(json, {
          network,
          coreOnly : true
        });
    const token = Token.fromMetadata(metadata.core, layout);
    return new Metadata(token);
  }
  
  toJSON(network = "137") {
    if(!this.metadata[network]) {
      this.metadata[network] = new OpenseaMapping()
      .build({core : this.token.getCoreMetadata()}, {
        network,
        tokenID: this.token.getTokenID()
      });
    }
    return this.metadata[network];
  }

};
