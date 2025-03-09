import type { Preview } from '@storybook/react';
import '../src/theme/index.css';
import 'tailwindcss/index.css';
const preview: Preview = {
	parameters: {
		layout: 'fullscreen',
		parameters: {
			a11y: {
				config: {},
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
