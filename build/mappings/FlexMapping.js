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
exports.FlexMapping = void 0;
var valueById_js_1 = require("./values/flexs/valueById.js");
var Mapping_js_1 = require("./Mapping.js");
var FlexMapping = /** @class */ (function (_super) {
    __extends(FlexMapping, _super);
    function FlexMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexMapping.prototype.getValues = function () {
        return valueById_js_1.valueById;
    };
    FlexMapping.prototype.shouldBuild = function (metadata, context) {
        return metadata.flex == null || metadata.core.flex == null;
    };
    FlexMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (context.coreOnly && metadata.core.flex == null) {
            metadata.core.flex = this.getKeyFromValue(metadata.flex);
        }
        else if (metadata.flex == null) {
            metadata.flex = this.getValuesFromKey(metadata.core.flex);
        }
        return metadata;
    };
    return FlexMapping;
}(Mapping_js_1.Mapping));
exports.FlexMapping = FlexMapping;
;
//# sourceMappingURL=FlexMapping.js.map