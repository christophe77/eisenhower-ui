import { jsx as _jsx } from "react/jsx-runtime";
import { designTokens } from '../../../theme/designTokens';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
export const Badge = ({ text, variant = 'success' }) => {
    const { isDarkMode } = useTheme();
    return (_jsx("span", { className: "px-3 py-1 text-sm rounded-full", style: { background: isDarkMode ? designTokens.darkMode[variant] : designTokens.colors[variant] }, children: text }));
};
