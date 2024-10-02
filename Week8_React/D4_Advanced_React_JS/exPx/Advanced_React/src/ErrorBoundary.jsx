import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error({ 'Error caught ErrorBoundary': error, errorInfo });
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>
            <h1 style={{ color: 'red' }}>
              {' '}
              Something wrong <br />
              with hasError{' '}
            </h1>
          </div>
        </>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
