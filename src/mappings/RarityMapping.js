import { valueById } from "../common/mappings/rarities/valueById.js";
import { Mapping } from "./Mapping.js";

export class RarityMapping extends Mapping {

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.rarity == null || metadata.core.rarity == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    if (context.coreOnly && metadata.core.rarity == null) {
      metadata.core.rarity = this.getKeyFromValue(metadata.rarity);
    } else if (metadata.rarity == null) {
      metadata.rarity = this.getValuesFromKey(metadata.core.rarity);
    }
    return metadata;
  }

};
