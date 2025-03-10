import { FC } from 'react';
import { designTokens } from '../../../theme/designTokens';
import { LazyInput } from '../../Atoms/Input/Lazy';
import { LazyButton } from '../../Atoms/Button/Lazy';

export const LoginForm: FC = () => {
	return (
		<div
			className={`p-6 bg-[${designTokens.colors.primary}] rounded-lg shadow-md w-80`}
		>
			<h2
				className={`text-lg font-semibold text-[${designTokens.colors.secondary}] mb-4`}
			>
				Login
			</h2>
			<LazyInput type="email" placeholder="Email" />
			<div className="h-4" />
			<LazyInput type="password" placeholder="Password" />
			<div className="h-6" />
			<LazyButton variant="primary" size="md">
				Sign In
			</LazyButton>
		</div>
	);
};
