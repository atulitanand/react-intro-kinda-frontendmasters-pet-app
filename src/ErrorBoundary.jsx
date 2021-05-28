// mostly copy from react docx

import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // I log this to Sentary, Azure Monitor, New Relic, TrackJS -- just some error monitoring services
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. Sowey! Lets go <Link to="/">Home</Link>.
        </h2>
      );
    }
    //render that if i got an error in what ever enclosed inside me but if you got no error render my childer i.e. this.props.childer
    /**
     * <ErrorBoundary>
     *  <BigDiv/> // this is child of error boundary
     * </ErrorBoundary>
     */
    return this.props.children;
  }
}

export default ErrorBoundary;
