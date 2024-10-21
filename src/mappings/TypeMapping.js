import { valueById } from "../common/mappings/types/valueById.js";
import { Mapping } from "./Mapping.js";

export class TypeMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.type == null || metadata.core.type == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.type == null) {
      metadata.core.type = this.getKeyFromValue(metadata.type);
    } else if (metadata.type == null) {
      metadata.type = this.getValuesFromKey(metadata.core.type);
    }
    return metadata;
  }
  
};
