import { FC, ReactNode, useTransition } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { designTokens } from '../../../theme/designTokens';
import useTheme from '../../Foundations/ThemeProvider/useTheme';

type ButtonProps = {
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	type?: 'button' | 'submit' | 'reset';
	children: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
};

const Button: FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	type,
	children,
	onClick,
	disabled,
	className,
}) => {
	const { isDarkMode } = useTheme();
	const [isPending, startTransition] = useTransition();

	const baseStyles = `rounded-lg font-medium transition-all cursor-pointer ${designTokens.transition} ${className}`;

	const variantStylesLight = {
		primary: `bg-[${designTokens.colors.primary}] text-[${designTokens.colors.textPrimary}] hover:bg-blue-700`,
		secondary: `bg-[${designTokens.colors.secondary}] text-[${designTokens.colors.textPrimary}] hover:bg-gray-700`,
		outline: `border border-[${designTokens.colors.outline}] text-[${designTokens.colors.outline}] hover:bg-gray-100`,
	};
	const variantStylesDark = {
		primary: `bg-[${designTokens.darkMode.primary}] text-[${designTokens.darkMode.textPrimary}] hover:bg-blue-700`,
		secondary: `bg-[${designTokens.darkMode.secondary}] text-[${designTokens.darkMode.textPrimary}] hover:bg-gray-700`,
		outline: `border border-[${designTokens.darkMode.outline}] text-[${designTokens.darkMode.outline}] hover:bg-gray-100`,
	};
	const sizeStyles = {
		sm: `px-3 py-1 text-sm`,
		md: `px-4 py-2 text-base`,
		lg: `px-5 py-3 text-lg`,
	};

	const wrappedOnClick = () => {
		if (onClick) {
			return startTransition(() => {
				onClick();
			});
		} else {
			return console.log('boom');
		}
	};

	return (
		<motion.button
			className={clsx(
				baseStyles,
				isDarkMode ? variantStylesDark[variant] : variantStylesLight[variant],
				sizeStyles[size],
				(disabled || isPending) && 'opacity-50',
			)}
			onClick={wrappedOnClick}
			disabled={disabled || isPending}
			type={type}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			style={{
				backgroundColor: designTokens.colors.primary,
				color: designTokens.colors.textPrimary,
				borderRadius: designTokens.borderRadius.lg,
				boxShadow: designTokens.boxShadow.md,
				cursor: disabled || isPending ? 'not-allowed' : 'pointer',
			}}
		>
			{isPending ? 'Pending...' : children}
		</motion.button>
	);
};

export default Button;
