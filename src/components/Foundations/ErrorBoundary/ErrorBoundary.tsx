import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	componentName: string;
}

interface State {
	hasError: boolean;
	message: string;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false, message: '' };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({
			hasError: true,
			message: `ErrorBoundary caught an error: ${error} ${JSON.stringify(errorInfo)}`,
		});
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="block">
					<h2 className="text-2xl">Something went wrong in component {this.props.componentName}</h2> 
					<p className="border p-4 mt-4 break-words">{this.state.message}</p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
