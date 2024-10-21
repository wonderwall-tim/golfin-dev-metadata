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
exports.BaseMapping = void 0;
var Mapping_js_1 = require("./Mapping.js");
/* import { ManufacturerMapping } from "./ManufacturerMapping";
import { CollectionMapping } from "./CollectionMapping";
import { ClassMapping } from "./ClassMapping"; */
var RarityMapping_js_1 = require("./RarityMapping.js");
/* import { YearMapping } from "./YearMapping";
import { RacingAttributesMapping } from "./RacingAttributesMapping"; */
var DescriptionMapping_js_1 = require("./DescriptionMapping.js");
var MaterialMapping_js_1 = require("./MaterialMapping.js");
var LoftMapping_js_1 = require("./LoftMapping.js");
var FlexMapping_js_1 = require("./FlexMapping.js");
var BrandMapping_js_1 = require("./BrandMapping.js");
var ModelMapping_js_1 = require("./ModelMapping.js");
var ImageMapping_js_1 = require("./ImageMapping.js");
var NameMapping_js_1 = require("./NameMapping.js");
var TypeMapping_js_1 = require("./TypeMapping.js");
var BaseMapping = /** @class */ (function (_super) {
    __extends(BaseMapping, _super);
    function BaseMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseMapping.prototype.getPrerequisiteMappings = function () {
        return [
            new BrandMapping_js_1.BrandMapping(),
            new TypeMapping_js_1.TypeMapping(),
            new FlexMapping_js_1.FlexMapping(),
            new LoftMapping_js_1.LoftMapping(),
            new MaterialMapping_js_1.MaterialMapping(),
            new ModelMapping_js_1.ModelMapping(),
            new RarityMapping_js_1.RarityMapping(),
            new NameMapping_js_1.NameMapping(),
            new DescriptionMapping_js_1.DescriptionMapping(),
            new ImageMapping_js_1.ImageMapping()
        ];
    };
    BaseMapping.prototype.build = function (metadata, context) {
        metadata = _super.prototype.build.call(this, metadata, context);
        if (!context.coreOnly) {
            metadata.id = context.tokenID.toString();
        }
        return metadata;
    };
    return BaseMapping;
}(Mapping_js_1.Mapping));
exports.BaseMapping = BaseMapping;
;
//# sourceMappingURL=BaseMapping.js.map