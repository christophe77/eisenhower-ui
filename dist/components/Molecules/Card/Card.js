import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Card = ({ title, description, children }) => {
    return (_jsxs("div", { className: "border rounded-lg p-4 shadow-lg", children: [_jsx("h3", { className: "text-lg font-bold", children: title }), _jsx("p", { className: "text-gray-600", children: description }), _jsx("div", { className: "mt-2", children: children })] }));
};
