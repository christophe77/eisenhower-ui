import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { designTokens } from '../../../theme/designTokens';
import { ThemeContext } from './ThemeContext';
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode]);
    return (_jsx(ThemeContext.Provider, { value: value, children: _jsx("div", { style: {
                backgroundColor: isDarkMode
                    ? designTokens.darkMode.background
                    : designTokens.colors.background,
                color: isDarkMode
                    ? designTokens.darkMode.textPrimary
                    : designTokens.colors.textPrimary,
                transition: designTokens.transition,
            }, children: children }) }));
};
