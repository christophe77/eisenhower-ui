import { FC } from 'react';
import useLanguage from '../../Foundations/LanguageProvider/useLanguage';

export type LangDef = {
	code: string;
	name: string;
};
export type LanguageSwitcherProps = {
	languageList: LangDef[];
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
	languageList,
}) => {
	const { language, setLanguage } = useLanguage();
	return (
		<select value={language} onChange={(e) => setLanguage(e.target.value)}>
			{languageList.map((lang, langIndex) => {
				return (
					<option key={`${lang.code}-${langIndex}`} value={lang.code}>
						{lang.name}
					</option>
				);
			})}
		</select>
	);
};
