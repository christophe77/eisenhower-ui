import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { designTokens } from "../../../theme/designTokens";
export const Input = ({ type = "text", label, error, success, fullWidth = false, icon, className = "", ...props }) => {
    const isCheckboxOrRadio = type === "checkbox" || type === "radio";
    return (_jsxs("div", { className: `flex flex-col gap-2 ${fullWidth ? "w-full" : "w-auto"}`, children: [label && !isCheckboxOrRadio && (_jsx("label", { className: "text-sm font-medium text-white", children: label })), _jsxs("div", { className: `flex items-center bg-${designTokens.colors.background} border ${error
                    ? "border-red-500"
                    : success
                        ? "border-green-500"
                        : `border-${designTokens.colors.outline}`} rounded-${designTokens.borderRadius.md} px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-${designTokens.colors.primary}`, children: [icon && _jsx("span", { className: "mr-2 text-gray-400", children: icon }), _jsx("input", { type: type, className: `w-full bg-transparent outline-none text-white text-sm placeholder-gray-400 ${className}`, ...props })] }), error && _jsx("span", { className: "text-sm text-red-500", children: error })] }));
};
