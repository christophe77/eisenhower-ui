import { FC } from 'react';
import IconButton from '../../Atoms/IconButton/Lazy';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
import LightImg from '../../../assets/light.webp';
import DarkImg from '../../../assets/dark.webp';

const ThemeSwitcher: FC = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const icon = isDarkMode ? (
		<img className="w-10" src={LightImg} alt="Enable light mode" />
	) : (
		<img className="w-10" src={DarkImg} alt="Enable dark mode" />
	);
	return <IconButton onClick={toggleTheme} icon={icon} />;
};

export default ThemeSwitcher;
