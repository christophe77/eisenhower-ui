import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { designTokens } from '../../../theme/designTokens';
import { LazyInput } from '../../Atoms/Input/Lazy';
import { LazyButton } from '../../Atoms/Button/Lazy';
export const LoginForm = () => {
    return (_jsxs("div", { className: `p-6 bg-[${designTokens.colors.primary}] rounded-lg shadow-md w-80`, children: [_jsx("h2", { className: `text-lg font-semibold text-[${designTokens.colors.secondary}] mb-4`, children: "Login" }), _jsx(LazyInput, { type: "email", placeholder: "Email" }), _jsx("div", { className: "h-4" }), _jsx(LazyInput, { type: "password", placeholder: "Password" }), _jsx("div", { className: "h-6" }), _jsx(LazyButton, { variant: "primary", size: "md", children: "Sign In" })] }));
};
