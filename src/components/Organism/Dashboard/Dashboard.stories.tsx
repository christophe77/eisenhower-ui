import { Meta, StoryObj } from '@storybook/react';
import { LazyDashboard } from './Lazy';

const metaDashboard: Meta<typeof LazyDashboard> = {
	title: 'Components/Organisms/Dashboard',
	component: LazyDashboard,
	tags: ['autodocs'],
};

export default metaDashboard;

export const Default: StoryObj<typeof LazyDashboard> = {};
