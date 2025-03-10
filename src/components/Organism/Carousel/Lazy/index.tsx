import { lazy } from 'react';
import type { CarouselProps } from '../Carousel';

export const LazyCarousel = lazy(() =>
	import('../Carousel').then((module) => ({ default: module.Carousel })),
);

export type { CarouselProps };
