import { FC, ReactNode } from '../../../../node_modules/react';
export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map