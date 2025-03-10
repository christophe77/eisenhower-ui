import type { Meta, StoryObj } from '@storybook/react';
import { LazyCarousel, CarouselProps } from './Lazy';

const metaCarousel: Meta<CarouselProps> = {
	title: 'Components/Organisms/Carousel',
	component: LazyCarousel,
	tags: ['autodocs'],
	argTypes: {
		autoPlay: { control: 'boolean' },
		interval: { control: { type: 'number', min: 1000, step: 500 } },
	},
};

export default metaCarousel;
type Story = StoryObj<CarouselProps>;

export const Default: Story = {
	args: {
		images: [
			'https://placehold.co/800x400',
			'https://placehold.co/800x400',
			'https://placehold.co/800x400',
		],
		autoPlay: true,
		interval: 3000,
	},
};
