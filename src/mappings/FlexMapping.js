import { valueById } from "./values/flexs";
import { Mapping } from "./Mapping";

export class FlexMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.flex == null || metadata.core.flex == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.flex == null) {
      metadata.core.flex = this.getKeyFromValue(metadata.flex);
    } else if (metadata.flex == null) {
      metadata.flex = this.getValuesFromKey(metadata.core.flex);
    }
    return metadata;
  }

};
