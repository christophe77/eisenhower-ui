import { FC, ReactNode } from 'react';
export type IconButtonProps = {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    icon?: string | ReactNode;
    className?: string;
};
export declare const IconButton: FC<IconButtonProps>;
//# sourceMappingURL=IconButton.d.ts.map