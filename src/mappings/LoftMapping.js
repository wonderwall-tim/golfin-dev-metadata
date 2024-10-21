import { valueById } from "./values/lofts/valueById.js";
import { Mapping } from "./Mapping.js";

export class LoftMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.loft == null || metadata.core.loft == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.loft == null) {
      metadata.core.loft = this.getKeyFromValue(metadata.loft);
    } else if (metadata.loft == null) {
      metadata.loft = this.getValuesFromKey(metadata.core.loft);
    }
    return metadata;
  }

};
