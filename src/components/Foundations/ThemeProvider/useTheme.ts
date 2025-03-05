import { useContext } from 'react';
import { ThemeContextType, ThemeContext } from './ThemeContext';

export default function useTheme(): ThemeContextType {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
