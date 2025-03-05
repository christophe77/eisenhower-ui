import { FC } from 'react';
import { designTokens } from '../../../tokens/designTokens';

type BadgeProps = {
	text: string;
	variant?: 'success' | 'warning' | 'error';
};

const Badge: FC<BadgeProps> = ({ text, variant = 'success' }) => {
	return (
		<span
			className="px-3 py-1 text-sm rounded-full text-white"
			style={{ background: designTokens.colors[variant] }}
		>
			{text}
		</span>
	);
};

export default Badge;
