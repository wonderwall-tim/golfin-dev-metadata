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
exports.TypeMapping = void 0;
var valueById_js_1 = require("../common/mappings/types/valueById.js");
var Mapping_js_1 = require("./Mapping.js");
var TypeMapping = /** @class */ (function (_super) {
    __extends(TypeMapping, _super);
    function TypeMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    TypeMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.type == null || metadata.core.type == null;
    };
    TypeMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.type == null) {
            metadata.core.type = this.getKeyFromValue(metadata.type);
        }
        else if (metadata.type == null) {
            metadata.type = this.getValuesFromKey(metadata.core.type);
        }
        return metadata;
    };
    return TypeMapping;
}(Mapping_js_1.Mapping));
exports.TypeMapping = TypeMapping;
;
//# sourceMappingURL=TypeMapping.js.map