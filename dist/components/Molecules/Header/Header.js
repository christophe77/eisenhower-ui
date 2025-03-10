import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { designTokens } from '../../../theme/designTokens';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
import { SidebarMenu } from '../../Organism/SidebarMenu/SidebarMenu';
import { Tooltip } from '../../Atoms/ToolTip/ToolTip';
export const Header = ({ title = '', items = [] }) => {
    const { isDarkMode } = useTheme();
    return (_jsxs("header", { className: "w-full p-4 shadow-md flex justify-between items-center", style: {
            backgroundColor: isDarkMode
                ? designTokens.darkMode.primary
                : designTokens.colors.primary,
        }, children: [_jsx(SidebarMenu, {}), _jsx("h1", { className: "text-xl font-bold pl-15", children: `<${title}>` }), _jsx("ul", { className: "inline whitespace-nowrap", children: items.map((item) => (_jsx("li", { className: `w-fit inline-block mx-1 p-3 ${item.link && 'cursor-pointer'}`, children: item.name }, `${item.name}-${item.link ?? '-'}`))) }), _jsx(Tooltip, { text: `Set dark mode ${isDarkMode ? 'OFF' : 'ON'}`, position: "left", children: _jsx(ThemeSwitcher, {}) })] }));
};
