import { lazy } from 'react';
import type { LanguageProviderProps } from '../LanguageProvider';

export const LazyLanguageProvider = lazy(() =>
	import('../LanguageProvider').then((module) => ({ default: module.LanguageProvider })),
);

export type { LanguageProviderProps };
