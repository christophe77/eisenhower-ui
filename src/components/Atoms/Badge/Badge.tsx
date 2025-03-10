import { FC } from 'react';
import { designTokens } from '../../../theme/designTokens';
import useTheme from '../../Foundations/ThemeProvider/useTheme';

export type BadgeProps = {
	text: string;
	variant?: 'success' | 'warning' | 'error';
};

export const Badge: FC<BadgeProps> = ({ text, variant = 'success' }) => {
	const {isDarkMode} = useTheme();
	return (
		<span
			className="px-3 py-1 text-sm rounded-full"
			style={{ background: isDarkMode ? designTokens.darkMode[variant] : designTokens.colors[variant] }}
		>
			{text}
		</span>
	);
};
