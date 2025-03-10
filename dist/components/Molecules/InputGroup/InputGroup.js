import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LazyInput } from '../../Atoms/Input/Lazy';
import { LazyButton } from '../../Atoms/Button/Lazy';
export const InputGroup = ({ placeholder, buttonText, onButtonClick, }) => {
    return (_jsxs("div", { className: "flex gap-2", children: [_jsx(LazyInput, { placeholder: placeholder }), _jsx(LazyButton, { onClick: onButtonClick, children: buttonText })] }));
};
export default InputGroup;
