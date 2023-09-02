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
        <div
          className="bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md m-auto mt-24"
          role="alert"
        >
          <p className=" text-xl text-center">
            <strong>Sorry!</strong> There seems to be an error with this
            contact.{" "}
          </p>
          <p className=" text-xl text-center">
            <Link to="/" className="text-bold text-blue-400">
              Click here
            </Link>{" "}
            to go back to the home page
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
