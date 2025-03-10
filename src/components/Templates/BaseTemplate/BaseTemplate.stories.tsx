import { LazyBaseTemplate } from './Lazy';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';

export default {
	title: 'Components/Templates/BaseTemplate',
	component: LazyBaseTemplate,
};

export const Default = () => (
	<LazyThemeProvider>
		<LazyBaseTemplate title="Page d'exemple">
			<p>BaseTemplate</p>
		</LazyBaseTemplate>
	</LazyThemeProvider>
);
