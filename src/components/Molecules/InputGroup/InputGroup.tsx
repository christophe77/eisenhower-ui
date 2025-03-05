import { FC } from 'react';
import Input from '../../Atoms/Input/Lazy';
import Button from '../../Atoms/Button/Lazy';

type InputGroupProps = {
	placeholder?: string;
	buttonText: string;
	onButtonClick?: () => void;
};

const InputGroup: FC<InputGroupProps> = ({
	placeholder,
	buttonText,
	onButtonClick,
}) => {
	return (
		<div className="flex gap-2">
			<Input placeholder={placeholder} />
			<Button onClick={onButtonClick}>{buttonText}</Button>
		</div>
	);
};

export default InputGroup;
