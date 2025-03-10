import { lazy } from 'react';
export const LazyLanguageProvider = lazy(() => import('../LanguageProvider').then((module) => ({ default: module.LanguageProvider })));
