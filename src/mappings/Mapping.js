/* import { Metadata } from "../Metadata.js"
import assert from "assert";
import deepEqual from "deep-equal";
 */
const Metadata = require('../Metadata.js')
const assert = require('assert')
const deepEqual = require('deep-equal')

class Mapping {

  constructor() {
  };

  getName() {
    return this.constructor.name;
  }

  getValues() {
    return {};
  }

  getValuesFromKey(key) {
    const values = this.getValues();
    const value = values[key] || values["*"];
    assert(value, `${this.getName()} values ${key} not found.`);
    return value;
  }

  getKeyFromValue(value) {
    const values = this.getValues();    
    const entry = Object.entries(values).find((entry) => deepEqual(entry[1], value));
    if (entry == null) {
      throw new Error(`Cannot find mapping of ${JSON.stringify(value)}`);
    }
    return entry[0];
  }

  getPrerequisiteMappings() {
    return [];
  }

  shouldBuild(metadata) {
    return true;
  }

  /**
   * @param {Metadata} metadata
   * @param {{tokenId:String,mappings:String[]}} buildContext
   * @returns Metadata
   */
  build(metadata, buildContext = {}) {
    assert(metadata.core, "Missing Core metadata");
    const meta = this.getPrerequisiteMappings()
      .reduce((acc, mapping) => {
        if (mapping.shouldBuild(metadata, buildContext)) {
          return mapping.build(acc, buildContext);
        } else {
          return acc;
        }
      },
        { ...metadata });
    return meta;
  }

};


module.exports = Mapping