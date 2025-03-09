import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from './LanguageContext';

export default function useLanguage(): LanguageContextType {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
