import { valueById } from "./values/brands/valueById.js";
import { Mapping } from "./Mapping.js";

export class BrandMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.brand == null || metadata.core.brand == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.brand == null) {
      metadata.core.brand = this.getKeyFromValue(metadata.brand);
    } else if (metadata.brand == null) {
      metadata.brand = this.getValuesFromKey(metadata.core.brand);
    }
    return metadata;
  }

};
