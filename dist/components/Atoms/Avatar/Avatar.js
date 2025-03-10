import { jsx as _jsx } from "react/jsx-runtime";
export const Avatar = ({ imgSrc, alt, size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };
    return (_jsx("img", { src: imgSrc, alt: alt, className: `rounded-full ${sizeClasses[size]}` }));
};
