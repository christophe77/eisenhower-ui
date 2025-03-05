import { FC, ReactNode, useTransition } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { designTokens } from '../../../tokens/designTokens';

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
	const [isPending, startTransition] = useTransition();
	const baseStyles = `rounded-lg font-medium transition-all cursor-pointer ${designTokens.transition} ${className}`;
	const variantStyles = {
		primary: `bg-[${designTokens.colors.primary}] text-[${designTokens.colors.textPrimary}] hover:bg-blue-700`,
		secondary: `bg-[${designTokens.colors.secondary}] text-[${designTokens.colors.textPrimary}] hover:bg-gray-700`,
		outline: `border border-[${designTokens.colors.outline}] text-[${designTokens.colors.outline}] hover:bg-gray-100`,
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
		}else{
			return console.log("click")
		}
	};

	return (
		<motion.button
			className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], {
				'opacity-50 cursor-not-allowed': disabled || isPending,
			})}
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
			}}
		>
			{isPending ? "Pending..." : children}
		</motion.button>
	);
};

export default Button;
