var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* import { Metadata } from "../Metadata.js"
import assert from "assert";
import deepEqual from "deep-equal";
 */
var Metadata = require('../Metadata.js');
var assert = require('assert');
var deepEqual = require('deep-equal');
var Mapping = /** @class */ (function () {
    function Mapping() {
    }
    ;
    Mapping.prototype.getName = function () {
        return this.constructor.name;
    };
    Mapping.prototype.getValues = function () {
        return {};
    };
    Mapping.prototype.getValuesFromKey = function (key) {
        var values = this.getValues();
        var value = values[key] || values["*"];
        assert(value, "".concat(this.getName(), " values ").concat(key, " not found."));
        return value;
    };
    Mapping.prototype.getKeyFromValue = function (value) {
        var values = this.getValues();
        var entry = Object.entries(values).find(function (entry) { return deepEqual(entry[1], value); });
        if (entry == null) {
            throw new Error("Cannot find mapping of ".concat(JSON.stringify(value)));
        }
        return entry[0];
    };
    Mapping.prototype.getPrerequisiteMappings = function () {
        return [];
    };
    Mapping.prototype.shouldBuild = function (metadata) {
        return true;
    };
    /**
     * @param {Metadata} metadata
     * @param {{tokenId:String,mappings:String[]}} buildContext
     * @returns Metadata
     */
    Mapping.prototype.build = function (metadata, buildContext) {
        if (buildContext === void 0) { buildContext = {}; }
        assert(metadata.core, "Missing Core metadata");
        var meta = this.getPrerequisiteMappings()
            .reduce(function (acc, mapping) {
            if (mapping.shouldBuild(metadata, buildContext)) {
                return mapping.build(acc, buildContext);
            }
            else {
                return acc;
            }
        }, __assign({}, metadata));
        return meta;
    };
    return Mapping;
}());
;
module.exports = Mapping;
//# sourceMappingURL=Mapping.js.map