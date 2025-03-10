import { FC } from 'react';
import { LazyInput } from '../../Atoms/Input/Lazy';
import { LazyButton } from '../../Atoms/Button/Lazy';

export type InputGroupProps = {
	placeholder?: string;
	buttonText: string;
	onButtonClick?: () => void;
};

export const InputGroup: FC<InputGroupProps> = ({
	placeholder,
	buttonText,
	onButtonClick,
}) => {
	return (
		<div className="flex gap-2">
			<LazyInput placeholder={placeholder} />
			<LazyButton onClick={onButtonClick}>{buttonText}</LazyButton>
		</div>
	);
};

export default InputGroup;
