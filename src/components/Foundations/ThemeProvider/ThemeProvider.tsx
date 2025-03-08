import { useState, FC, ReactNode } from 'react';
import { designTokens } from '../../../theme/designTokens';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => setIsDarkMode((prev) => !prev);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
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

