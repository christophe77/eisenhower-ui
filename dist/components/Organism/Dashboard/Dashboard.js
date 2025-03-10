import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoginForm } from '../LoginForm/LoginForm';
import { LazyHeader } from '../../Molecules/Header/Lazy';
import { designTokens } from '../../../theme/designTokens';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';
export const Dashboard = () => {
    return (_jsx(LazyThemeProvider, { children: _jsxs("div", { className: `min-h-screen bg-[${designTokens.colors.background}] flex flex-col items-center`, children: [_jsx(LazyHeader, { title: 'Dashboard', items: [
                        { name: 'Item with link', link: 'https://google.fr/' },
                        { name: 'Item without link' },
                    ] }), _jsx("div", { className: "mt-10", children: _jsx(LoginForm, {}) })] }) }));
};
