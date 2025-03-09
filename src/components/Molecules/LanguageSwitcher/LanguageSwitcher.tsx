import { FC } from 'react';
import useLanguage from '../../Foundations/LanguageProvider/useLanguage';

const LanguageSwitcher: FC = () => {
	const { language, setLanguage } = useLanguage();
	return (
		<select value={language} onChange={(e) => setLanguage(e.target.value)}>
			<option value="en">English</option>
			<option value="fr">Français</option>
			<option value="es">Español</option>
		</select>
	);
};

export default LanguageSwitcher;
