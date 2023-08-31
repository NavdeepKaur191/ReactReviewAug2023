/**
 * CONVERT TO A FUNCTION COMPONENT
 * To navigate back to the home page click the "Continue as Guest Link"
 */

import { Component } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import Logo from "../Logo";

class SignupForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      successful: undefined,
    };
  }

  async addUser(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:3030/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName.toString(),
        lastName: this.state.lastName.toString(),
        email: this.state.email.toString(),
        password: this.state.password.toString(),
      }),
    });
    this.setSuccessful(res.ok);
    this.resetState();
  }

  handleUpdatingValue(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  setSuccessful(value) {
    this.setState((state) => {
      state.successful = value;
    });
  }

  resetState() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <div className="mx-auto h-12 w-auto flex justify-center">
                <Logo />
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Create a New Account
              </h2>
            </div>

            {this.state.successful ? (
              <div
                className={
                  this.state.successful == null
                    ? "hidden"
                    : "block bg-green-100 rounded-md text-center p-4  "
                }
              >
                <div className="flex justify-center space-x-2 text-green-900 mb-1">
                  <CheckCircleIcon className="w-6 h-6" />
                  <h3 className="font-bold">Your user account was created!</h3>
                </div>
                <p className="font-light">
                  <Link className="underline px-1" to="/">
                    Login
                  </Link>
                  to continue shopping.
                </p>
              </div>
            ) : (
              <div
                className={
                  this.state.successful == null
                    ? "hidden"
                    : "bg-red-100 rounded-md text-center p-4  "
                }
              >
                <div className="flex justify-center space-x-2 text-red-900 mb-1">
                  <XCircleIcon className="w-6 h-6" />
                  <h3 className="font-bold">Sorry an error occurred! </h3>
                </div>
                <p className="font-light">
                  Please try register again. If registration fails a second time
                  please contact our customer support at
                  customersupport@logoipsom.com
                </p>
              </div>
            )}
            <form className="mt-8 space-y-6" onSubmit={(e) => this.addUser(e)}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div className="flex space-x-4 ">
                  <div className="w-1/2">
                    <label htmlFor="first_name" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="first_name"
                      autoComplete="given-name"
                      required
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="First Name"
                      onChange={(e) => {
                        this.handleUpdatingValue(e);
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="first_name" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="last_name"
                      autoComplete="family-name"
                      required
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Last Name"
                      onChange={(e) => {
                        this.handleUpdatingValue(e);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    onChange={(e) => {
                      this.handleUpdatingValue(e);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => {
                      this.handleUpdatingValue(e);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-500 focus:ring-blue-500"
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="text-sm border-t-2 pt-4 flex justify-center">
              <a
                href="/"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Continue as Guest
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignupForm;
