import { Component, ErrorInfo, ReactNode } from '../../../../node_modules/react';
export interface ErrorBoundaryProps {
    children: ReactNode;
    componentName: string;
}
interface State {
    hasError: boolean;
    message: string;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import('../../../../node_modules/react').ReactPortal | import('../../../../node_modules/react').ReactElement<unknown, string | import('../../../../node_modules/react').JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map