import { FC, ReactNode, useState, useMemo } from 'react';
import { LanguageContext } from './LanguageContext';

export type LanguageProviderProps = {
	children: ReactNode
}
export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState('en');
	const value = useMemo(
		() => ({ language, setLanguage }),
		[language, setLanguage],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};
