import { jsxs as _jsxs } from "react/jsx-runtime";
import { useTransition } from 'react';
import { designTokens } from '../../../theme/designTokens';
export const Form = ({ action = () => {
    console.log('empty action');
}, children, }) => {
    const [isPending, startTransition] = useTransition();
    const actionWrapper = (formData) => {
        startTransition(() => action(formData));
    };
    return (_jsxs("form", { className: `border border-[${designTokens.borderWidth.md}] p-2 rounded-${designTokens.borderRadius.md}`, action: actionWrapper, children: [isPending && 'pending', !isPending && children] }));
};
