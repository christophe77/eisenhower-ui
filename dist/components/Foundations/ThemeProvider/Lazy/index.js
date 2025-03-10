import { lazy } from 'react';
export const LazyThemeProvider = lazy(() => import('../ThemeProvider').then((module) => ({ default: module.ThemeProvider })));
