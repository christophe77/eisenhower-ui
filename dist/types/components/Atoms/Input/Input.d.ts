import { InputHTMLAttributes, FC, ReactNode } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    success?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
}
export declare const Input: FC<InputProps>;
//# sourceMappingURL=Input.d.ts.map