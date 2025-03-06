import { FC } from 'react';
import { designTokens } from '../../../tokens/designTokens';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import useTheme from '../../Foundations/ThemeProvider/useTheme';
import SidebarMenu from '../../Organism/SidebarMenu/SidebarMenu';
import Tooltip from '../../Atoms/ToolTip/ToolTip';

type HeaderProps = {
	title: string;
	items: {
		name: string;
		link?: string;
	}[];
};

const Header: FC<HeaderProps> = ({ title = '', items = [] }: HeaderProps) => {
	const { isDarkMode } = useTheme();
	return (
		<header
			className="w-full p-4 shadow-md flex justify-between items-center"
			style={{
				backgroundColor: isDarkMode
					? designTokens.darkMode.primary
					: designTokens.colors.primary,
			}}
		>
			<SidebarMenu />

			<h1 className="text-xl font-bold pl-15">{`<${title}>`}</h1>

			<ul className="inline whitespace-nowrap">
				{items.map((item) => (
					<li
						className={`w-fit inline-block mx-1 p-3 ${item.link && 'cursor-pointer'}`}
						key={`${item.name}-${item.link ?? '-'}`}
					>
						{item.name}
					</li>
				))}
			</ul>
			<Tooltip text={`Set dark mode ${isDarkMode ? 'OFF' : 'ON'}`}>
				<ThemeSwitcher />
			</Tooltip>
		</header>
	);
};

export default Header;
