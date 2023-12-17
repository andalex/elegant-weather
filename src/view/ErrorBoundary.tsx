import React, { Component, ReactNode } from 'react'

type Props = {
  fallbackComponent: ReactNode
  children: ReactNode
}

type State = {
    hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  override state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      console.error(error, errorInfo);
  }

  override render() {
    const { hasError } = this.state;
    const { fallbackComponent, children } = this.props;

    if (hasError) {
      return fallbackComponent
    }
    return children
  }
}
