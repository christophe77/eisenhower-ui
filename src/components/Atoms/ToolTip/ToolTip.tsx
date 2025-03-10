import { useState, ReactNode, FC } from 'react';
import clsx from 'clsx';

export type ToolTipProps = {
	children: ReactNode;
	text: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
};

export const Tooltip: FC<ToolTipProps> = ({
	children,
	text,
	position = 'top',
}) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className="relative inline-block"
			role="tooltip"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			onFocus={() => setVisible(true)}
			onBlur={() => setVisible(false)}
		>
			{children}
			<div
				className={clsx(
					'absolute z-50 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg transition-opacity duration-200',
					visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
					position === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
					position === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2',
					position === 'left' && 'right-full top-1/2 -translate-y-1/2 mr-2',
					position === 'right' && 'left-full top-1/2 -translate-y-1/2 ml-2',
				)}
			>
				{text}
			</div>
		</div>
	);
};
