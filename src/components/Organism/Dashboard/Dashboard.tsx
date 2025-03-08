import { FC } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../../Molecules/Header/Header';
import { designTokens } from '../../../theme/designTokens';
import { ThemeProvider } from '../../Foundations/ThemeProvider/ThemeProvider';

const Dashboard: FC = () => {
	return (
		<ThemeProvider>
			<div
				className={`min-h-screen bg-[${designTokens.colors.background}] flex flex-col items-center`}
			>
				<Header
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
		</ThemeProvider>
	);
};

export default Dashboard;
