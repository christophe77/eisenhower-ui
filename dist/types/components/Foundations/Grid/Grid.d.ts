import { FC, ReactNode } from 'react';
export interface GridProps {
    columns?: number;
    sm?: number;
    md?: number;
    lg?: number;
    gap?: string;
    maxWidth?: string;
    fullWidth?: boolean;
    align?: 'left' | 'center' | 'right';
    autoFit?: boolean;
    autoFill?: boolean;
    minColumnWidth?: string;
    maxColumnWidth?: string;
    alignItems?: 'start' | 'center' | 'end';
    justifyItems?: 'start' | 'center' | 'end';
    alignContent?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    transitionDuration?: string;
    animationType?: 'fade' | 'slide' | 'bounce';
    animationDirection?: 'left' | 'right' | 'top' | 'bottom';
    children: ReactNode;
    className?: string;
}
export declare const Grid: FC<GridProps>;
//# sourceMappingURL=Grid.d.ts.map