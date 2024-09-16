import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = () => ({ hasError: true });

  componentDidCatch(error) {
    if (error) {
      // Do something with Error *errorHandler
    }
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div />;
    }
    return children;
  }
}

const mode = import.meta.env.VITE_MODE;

export function fallbackErrorRender(props) {
  const { error, resetErrorBoundary } = props;
  return (
    <div className="w-full h-[100svh] flex flex-col m-auto justify-center items-center gap-2">
      <p>Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
      {mode === 'development' || ['localhost', '127.0.0.1'].includes(window.location.hostname) && <pre className="text-red-500">{error.stack}</pre>}
      <div className="flex gap-2">
        <button className="bz-btn" onClick={resetErrorBoundary}>
          Try again
        </button>
        <a href="/" className="bz-btn">
          Home
        </a>
      </div>
    </div>
  );
}
