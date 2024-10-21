import { valueById } from "./values/models/valueById.js";
import { Mapping } from "./Mapping.js";

export class ModelMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.material == null || metadata.core.material == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.model == null) {
      metadata.core.model = this.getKeyFromValue(metadata.model);
    } else if (metadata.model == null) {
      metadata.model = this.getValuesFromKey(metadata.core.model);
    }
    return metadata;
  }

};
