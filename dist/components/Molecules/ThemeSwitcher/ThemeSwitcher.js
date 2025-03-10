import { jsx as _jsx } from "react/jsx-runtime";
import { LazyIconButton } from '../../Atoms/IconButton/Lazy';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
import LightImg from '../../../assets/light.webp';
import DarkImg from '../../../assets/dark.webp';
export const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const icon = isDarkMode ? (_jsx("img", { className: "w-8", src: DarkImg, alt: "Enable light mode" })) : (_jsx("img", { className: "w-8", src: LightImg, alt: "Enable dark mode" }));
    return _jsx(LazyIconButton, { onClick: toggleTheme, icon: icon });
};
