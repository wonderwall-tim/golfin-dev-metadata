import { valueById } from "./values/materials/valueById.js";
import { Mapping } from "./Mapping.js";

export class MaterialMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.material == null || metadata.core.material == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.material == null) {
      metadata.core.material = this.getKeyFromValue(metadata.material);
    } else if (metadata.material == null) {
      metadata.material = this.getValuesFromKey(metadata.core.material);
    }
    return metadata;
  }

};
