import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, message: '' };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            message: `ErrorBoundary caught an error: ${error} ${JSON.stringify(errorInfo)}`,
        });
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs("div", { className: "block", children: [_jsxs("h2", { className: "text-2xl", children: ["Something went wrong in component ", this.props.componentName] }), _jsx("p", { className: "border p-4 mt-4 break-words", children: this.state.message })] }));
        }
        return this.props.children;
    }
}
