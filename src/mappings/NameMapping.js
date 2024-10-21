import { valueById } from "./values/names/valueById.js";
import { Mapping } from "./Mapping.js";
import { MaterialMapping } from "./MaterialMapping.js";

export class NameMapping extends Mapping {

  getPrerequisiteMappings() {
    return [new MaterialMapping()];
  }

  getValues() {
    return valueById;
  }

  shouldBuild(metadata, context) {
    return metadata.item == null || metadata.core.item == null;
  }

  build(metadata, context) {
    metadata = super.build(metadata, context);
    const item = metadata.core.item;
    const material = metadata.core.material;
    const appearance = metadata.core.appearance;

    try {
      metadata.name = this.getValuesFromKey(`M${material}_I${item}_L${appearance}`);
    } catch (e) {
      metadata.name = this.getValuesFromKey(`M${material}_I${item}`);
    }

    return metadata;
  }

};
