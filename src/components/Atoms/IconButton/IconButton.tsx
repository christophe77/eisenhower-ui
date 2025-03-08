import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { designTokens } from '../../../theme/designTokens';

type IconButtonProps = {
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
    icon?: string | ReactNode;
    className?:string;
};

const IconButton: FC<IconButtonProps> = ({
	variant = 'primary',
	size = 'md',
	children,
	onClick,
	disabled,
    icon,
    className
}) => {
	const baseStyles = `rounded-md shadow-md font-medium transition-all ${designTokens.transition} ${className}`;
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

	return (
		<motion.button
			className={clsx(
                baseStyles,
				`bg-[${designTokens.colors.primary}] text-[${designTokens.colors.textPrimary}] cursor-pointer`,
                variantStyles[variant], sizeStyles[size],{
                    'opacity-50 cursor-not-allowed': disabled,
                }
			)}
			onClick={onClick}
			disabled={disabled}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			style={{
				backgroundColor: designTokens.colors.primary,
				color: designTokens.colors.textPrimary,
				borderRadius: designTokens.borderRadius.lg,
				boxShadow: designTokens.boxShadow.md,
			}}
		>
			{icon}{children}
		</motion.button>
	);
};

export default IconButton;
