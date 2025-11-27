import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from './ui'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

/**
 * Error Boundary component to catch React errors in the component tree
 * and display a fallback UI instead of crashing the entire app
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }
    
    // In production, you could send this to an error tracking service
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen px-6 py-12">
          <div className="flex flex-col gap-4 items-center max-w-md text-center">
            <h1 className="font-bold text-2xl text-[#0a0a0a]">
              Something went wrong
            </h1>
            <p className="font-normal text-base text-[#737373]">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 p-4 bg-[#f5f5f5] rounded-lg text-left w-full">
                <summary className="font-medium text-sm text-[#0a0a0a] cursor-pointer mb-2">
                  Error details (development only)
                </summary>
                <pre className="text-xs text-[#737373] overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack && `\n\n${this.state.error.stack}`}
                </pre>
              </details>
            )}
            <div className="flex gap-3 mt-4">
              <Button
                variant="primary"
                onClick={this.handleReset}
              >
                Try again
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.location.reload()}
              >
                Refresh page
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

