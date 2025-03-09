import BaseTemplate from './BaseTemplate';
import ThemeProvider from '../../Foundations/ThemeProvider/Lazy';

export default {
	title: 'Components/Templates/BaseTemplate',
	component: BaseTemplate,
};

export const Default = () => (
	<ThemeProvider>
		<BaseTemplate title="Page d'exemple"><p>BaseTemplate</p></BaseTemplate>
	</ThemeProvider>
);
