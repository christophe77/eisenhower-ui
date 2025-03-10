import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
export default function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
