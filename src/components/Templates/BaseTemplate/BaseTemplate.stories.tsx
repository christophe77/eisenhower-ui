import BaseTemplate from './BaseTemplate';
import ThemeProvider from '../../Foundations/ThemeProvider/Lazy';
import { ReactNode } from 'react';

export default {
	title: 'Components/Templates/BaseTemplate',
	component: BaseTemplate,
};

export const Default = (children: ReactNode) => (
	<ThemeProvider>
		<BaseTemplate title="Page d'exemple">{children}</BaseTemplate>
	</ThemeProvider>
);
