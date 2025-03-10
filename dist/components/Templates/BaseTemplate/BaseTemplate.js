import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { LazyHeader } from '../../Molecules/Header/Lazy';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';
import { LazyHeadDocument } from '../../Foundations/HeadDocument/Lazy';
import { designTokens } from '../../../theme/designTokens';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
export const BaseTemplate = ({ title, children }) => {
    const { isDarkMode } = useTheme();
    const items = [
        { name: 'Item with link', link: 'https://google.fr/' },
        { name: 'Item without link' },
    ];
    const metas = [
        { name: 'description', content: 'Eisenhower ui design system' },
    ];
    const links = [
        { rel: 'stylesheet', href: 'styles.css' },
        { rel: 'canonical', href: 'https://example.com/page' },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(LazyHeadDocument, { title: title, metas: metas, links: links }), _jsx(LazyThemeProvider, { children: _jsx("div", { className: `flex min-h-screen bg-[${isDarkMode ? designTokens.darkMode.background : designTokens.colors.background}]`, children: _jsxs("div", { className: "flex flex-col flex-1", children: [_jsx(LazyHeader, { title: title, items: items }), _jsx("main", { className: "flex-1 p-6", children: children })] }) }) })] }));
};
