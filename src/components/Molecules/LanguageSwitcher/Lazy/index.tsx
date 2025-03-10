import { lazy } from 'react';
import type { LanguageSwitcherProps } from '../LanguageSwitcher';

export const LazyLanguageSwitcher = lazy(() =>
	import('../LanguageSwitcher').then((module) => ({ default: module.LanguageSwitcher })),
);

export type { LanguageSwitcherProps };
