"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDate = void 0;
const utility_1 = __importDefault(require("./utility"));
function showDate() {
    const date = (0, utility_1.default)();
    alert(date);
}
exports.showDate = showDate;
