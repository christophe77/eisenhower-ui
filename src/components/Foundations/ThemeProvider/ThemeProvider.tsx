import { useState, FC, ReactNode, useMemo } from 'react';
import { designTokens } from '../../../theme/designTokens';
import { ThemeContext } from './ThemeContext';

export type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleTheme = () => setIsDarkMode((prev) => !prev);

	const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode]);

	return (
		<ThemeContext.Provider value={value}>
			<div
				style={{
					backgroundColor: isDarkMode
						? designTokens.darkMode.background
						: designTokens.colors.background,
					color: isDarkMode
						? designTokens.darkMode.textPrimary
						: designTokens.colors.textPrimary,
					transition: designTokens.transition,
				}}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
