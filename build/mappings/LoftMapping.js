"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoftMapping = void 0;
var valueById_js_1 = require("./values/lofts/valueById.js");
var Mapping_js_1 = require("./Mapping.js");
var LoftMapping = /** @class */ (function (_super) {
    __extends(LoftMapping, _super);
    function LoftMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoftMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    LoftMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.loft == null || metadata.core.loft == null;
    };
    LoftMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.loft == null) {
            metadata.core.loft = this.getKeyFromValue(metadata.loft);
        }
        else if (metadata.loft == null) {
            metadata.loft = this.getValuesFromKey(metadata.core.loft);
        }
        return metadata;
    };
    return LoftMapping;
}(Mapping_js_1.Mapping));
exports.LoftMapping = LoftMapping;
;
//# sourceMappingURL=LoftMapping.js.map