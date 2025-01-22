import React, { Component, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre>{this.state.error?.message}</pre>
          <button onClick={this.resetError}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
