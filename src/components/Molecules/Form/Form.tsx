import { FC, ReactNode, useTransition } from 'react';
import { designTokens } from '../../../theme/designTokens';

export type FormProps = {
	action?: (formData: FormData) => void | Promise<void>;
	children?: ReactNode;
};

export const Form: FC<FormProps> = ({
	action = () => {
		console.log('empty action');
	},
	children,
}) => {
	const [isPending, startTransition] = useTransition();

	const actionWrapper = (formData: FormData) => {
		startTransition(() => action(formData));
	};

	return (
		<form
			className={`border border-[${designTokens.borderWidth.md}] p-2 rounded-${designTokens.borderRadius.md}`}
			action={actionWrapper}
		>
			{isPending && 'pending'}
			{!isPending && children}
		</form>
	);
};
