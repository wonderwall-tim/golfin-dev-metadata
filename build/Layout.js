"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFieldNames = exports.getLayoutMask = exports.CAR_LAYOUT = exports.CAR_COLLECTION_LAYOUT = exports.TOKEN_TYPE_LAYOUT = void 0;
var bn_js_1 = require("bn.js");
var bits_js_1 = require("bits.js");
var big_integer_1 = require("big-integer");
var CAR_TOKEN_BITS = [
    { name: "serialNumber", bits: 8 },
    { name: "item", bits: 16 },
    { name: "appearance", bits: 12 },
    { name: "padding4", bits: 36 },
    { name: "power", bits: 12 },
    { name: "accuracy", bits: 12 },
    { name: "spin", bits: 12 },
    { name: "recovery", bits: 12 },
    { name: "durability", bits: 12 },
    { name: "weight", bits: 12 },
    { name: "model", bits: 8 },
    { name: "rarity", bits: 8 },
    { name: "brand", bits: 8 },
    { name: "flex", bits: 8 },
    { name: "padding3", bits: 24 },
    { name: "loft", bits: 8 },
    { name: "padding2", bits: 16 } // Padding
];
var CAR_COLLECTION_BITS = [
    { name: "padding1", bits: 3 },
    { name: "material", bits: 16 }
];
var TOKEN_TYPE_BITS = [
    { name: "type", bits: 12 },
    { name: "nfFlag", bits: 1 }
];
exports.TOKEN_TYPE_LAYOUT = __spreadArray([
    { name: "padding", bits: 243 }
], TOKEN_TYPE_BITS, true);
exports.CAR_COLLECTION_LAYOUT = __spreadArray(__spreadArray([], CAR_COLLECTION_BITS, true), TOKEN_TYPE_BITS, true);
exports.CAR_LAYOUT = __spreadArray(__spreadArray([], CAR_TOKEN_BITS, true), exports.CAR_COLLECTION_LAYOUT, true);
/**
* @typedef {{name:string, bits: number}} BitsLayout
* @typedef {BitsLayout[]} Layout
*/
function getLayoutMask(fullLayout) {
    var layoutBits = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        layoutBits[_i - 1] = arguments[_i];
    }
    var bnEntries = fullLayout.map(function (item) {
        if (layoutBits.includes(item.name)) {
            var value = (new bn_js_1.default(2)).pow(new bn_js_1.default(item.bits)).sub(new bn_js_1.default(1));
            return [item.name, value];
        }
        else {
            return [item.name, new bn_js_1.default(0)];
        }
    });
    var values = Object.fromEntries(bnEntries.map(function (_a) {
        var arg = _a[0], value = _a[1];
        return [arg, new big_integer_1.default(value.toString(10))];
    }));
    return new bn_js_1.default(bits_js_1.default.encode(fullLayout, values).toString());
}
exports.getLayoutMask = getLayoutMask;
/**
*
* @param {string|BN} value
* @returns {string[]}
*/
function extractFieldNames(fullLayout, value, base) {
    if (base === void 0) { base = 10; }
    value = new bn_js_1.default(value, base);
    var currentBit = 0;
    return fullLayout.filter(function (_a) {
        var bits = _a.bits;
        var mask = (new bn_js_1.default(2)).pow(new bn_js_1.default(bits)).sub(new bn_js_1.default(1)).iushln(currentBit);
        currentBit += bits;
        var fieldBitMask = value.and(mask);
        return !fieldBitMask.isZero();
    }).map(function (_a) {
        var name = _a.name;
        return name;
    });
}
exports.extractFieldNames = extractFieldNames;
//# sourceMappingURL=Layout.js.map