import { FC, ReactNode, useState, useMemo } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
export default LanguageProvider;
