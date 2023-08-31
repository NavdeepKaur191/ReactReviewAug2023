import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
      this.state = {
      hasError: false,
    };
  }

   static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <p>
          Sorry! There seems to be an error with this contact.{" "}
          <Link to="/" className="text-bold text-blue-400">
            Click here
          </Link>{" "}
          to go back to the home page
        </p>
      );
    }
    return this.props.children;
  }
}


export default ErrorBoundary;