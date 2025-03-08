import { FC } from 'react';
import { designTokens } from '../../../theme/designTokens';
import Input from '../../Atoms/Input/Lazy';
import Button from '../../Atoms/Button/Lazy';

const LoginForm: FC = () => {
	return (
		<div
			className={`p-6 bg-[${designTokens.colors.card}] rounded-lg shadow-md w-80`}
		>
			<h2
				className={`text-lg font-semibold text-[${designTokens.colors.secondary}] mb-4`}
			>
				Login
			</h2>
			<Input type="email" placeholder="Email" />
			<div className="h-4" />
			<Input type="password" placeholder="Password" />
			<div className="h-6" />
			<Button variant="primary" size="md">
				Sign In
			</Button>
		</div>
	);
};

export default LoginForm;
