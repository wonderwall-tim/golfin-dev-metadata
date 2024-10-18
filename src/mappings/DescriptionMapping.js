import { valueById } from "./values/descriptions";
import { Mapping } from "./Mapping";
import { MaterialMapping } from "./MaterialMapping";

export class DescriptionMapping extends Mapping {

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
    const material = metadata.core.material;
    const item = metadata.core.item;
    const appearance = metadata.core.appearance;

    try {
      metadata.description = this.getValuesFromKey(`M${material}_I${item}_L${appearance}`);
    } catch (e) {
      metadata.description = this.getValuesFromKey(`M${material}_I${item}`);
    }

    return metadata;
  }

};
