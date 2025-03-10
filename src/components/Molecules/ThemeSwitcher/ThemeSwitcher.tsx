import { FC } from 'react';
import { LazyIconButton } from '../../Atoms/IconButton/Lazy';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
import LightImg from '../../../assets/light.webp';
import DarkImg from '../../../assets/dark.webp';

export const ThemeSwitcher: FC = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const icon = isDarkMode ? (
		<img className="w-8" src={DarkImg} alt="Enable light mode" />
	) : (
		<img className="w-8" src={LightImg} alt="Enable dark mode" />
	);
	return <LazyIconButton onClick={toggleTheme} icon={icon} />;
};
