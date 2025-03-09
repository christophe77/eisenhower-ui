import { createContext } from 'react';

export interface LanguageContextType {
	language: string;
	setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>({
	language: 'en',
	setLanguage: (lang: string) => {
		console.log(lang);
	},
});
