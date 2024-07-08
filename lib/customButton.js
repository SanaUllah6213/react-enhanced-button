"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomButton;
// src/CustomButton.tsx
const react_1 = __importDefault(require("react"));
const react_2 = require("@iconify/react");
const fa_1 = require("react-icons/fa");
require("./Button.scss");
function CustomButton({ children, variant = "default", className = "", customStyle, type = 'button', onClick, childClasses = "", disabled = false, showPlusButton = false, buttonIcon = '', rotateArrowIcon = false, loading = false, showCrossIcon = false, iconStyle = "", }) {
    const buttonClass = variant === "primary"
        ? "primary-button"
        : variant === "secondary"
            ? "secondary-button"
            : "default-button";
    return (react_1.default.createElement("button", { type: type, onClick: onClick, style: !children ? Object.assign({ padding: '0px' }, customStyle) : Object.assign({}, customStyle), className: `${buttonClass} ${className} main-btn`, disabled: disabled || loading },
        loading ? react_1.default.createElement(fa_1.FaSpinner, { size: 20, color: "#fff" }) : null,
        showPlusButton ? react_1.default.createElement(react_2.Icon, { icon: "ic:baseline-plus", height: "24" }) : null,
        buttonIcon ? react_1.default.createElement(react_2.Icon, { icon: buttonIcon, className: iconStyle, height: "24" }) : null,
        showCrossIcon ? react_1.default.createElement(react_2.Icon, { icon: "akar-icons:cross", height: "24" }) : null,
        react_1.default.createElement("span", { className: `btn-text ${childClasses}` }, children)));
}
