import { lazy } from 'react';
import type { AskGptChatProps } from '../AskGptChat';

export const LazyAskGptChat = lazy(() =>
	import('../AskGptChat').then((module) => ({ default: module.AskGptChat })),
);

export type { AskGptChatProps };
