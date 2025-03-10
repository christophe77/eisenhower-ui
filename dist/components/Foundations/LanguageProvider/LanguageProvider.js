import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { LanguageContext } from './LanguageContext';
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
    return (_jsx(LanguageContext.Provider, { value: value, children: children }));
};
