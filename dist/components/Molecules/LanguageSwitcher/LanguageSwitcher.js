import { jsx as _jsx } from "react/jsx-runtime";
import useLanguage from '../../Foundations/LanguageProvider/useLanguage';
export const LanguageSwitcher = ({ languageList, }) => {
    const { language, setLanguage } = useLanguage();
    return (_jsx("select", { value: language, onChange: (e) => setLanguage(e.target.value), children: languageList.map((lang, langIndex) => {
            return (_jsx("option", { value: lang.code, children: lang.name }, `${lang.code}-${langIndex}`));
        }) }));
};
