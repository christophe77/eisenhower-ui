import { FC } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { LazyHeader } from '../../Molecules/Header/Lazy';
import { designTokens } from '../../../theme/designTokens';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';

export const Dashboard: FC = () => {
	return (
		<LazyThemeProvider>
			<div
				className={`min-h-screen bg-[${designTokens.colors.background}] flex flex-col items-center`}
			>
				<LazyHeader
					title={'Dashboard'}
					items={[
						{ name: 'Item with link', link: 'https://google.fr/' },
						{ name: 'Item without link' },
					]}
				/>
				<div className="mt-10">
					<LoginForm />
				</div>
			</div>
		</LazyThemeProvider>
	);
};
