import { lazy } from 'react';
export const LazyLanguageSwitcher = lazy(() => import('../LanguageSwitcher').then((module) => ({ default: module.LanguageSwitcher })));
