import { lazy } from 'react';
export const LazyAskGptChat = lazy(() => import('../AskGptChat').then((module) => ({ default: module.AskGptChat })));
