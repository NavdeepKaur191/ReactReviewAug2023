import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

function CreateContact() {
  var navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function addContact(event) {
    event.preventDefault();
    await fetch("http://contactlist.us-east-1.elasticbeanstalk.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        company: company,
        phone: formatPhoneNumber(phone.replace(/[^A-Za-z0-9]+/g, "")),
        email: email,
      }),
    });

    navigate("/");
  }

  return (
    <>
      <nav className="md:w-3/4 m-auto mt-8">
        <button
          aria-label="Navigates back to the home page"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
      </nav>
      <h1 className="w-full bg-green-600 text-gray-100 text-center py-4 text-4xl uppercase tracking-wide mt-20 md:w-1/2 mx-auto rounded-t-md">
        Add New Contact
      </h1>
      <form
        className="grid grid-cols-2 md:w-1/2 mx-auto shadow-2xl rounded-md p-8"
        onSubmit={(e) => addContact(e)}
      >
        {/* First Name */}
        <div className="w-full px-3 mb-6 md:mb-4">
          <label
            htmlFor="firstName"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            <strong className="text-red-400">*</strong>First Name:
          </label>

          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        {/* Last Name */}
        <div className="w-full px-3">
          <label
            htmlFor="lastName"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            <strong className="text-red-400">*</strong>Last Name:
          </label>

          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        {/* Company */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="company"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            Company:
          </label>
          <input
            type="text"
            id="company"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        {/* Phone Number */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="phone"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={formatPhoneNumber(phone)}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* Email */}
        <div className="w-full px-3 col-span-full mb-6 md:mb-4">
          <label
            htmlFor="email"
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="col-span-full text-lg border-2 text-gray-100 border-green-600 bg-green-600 hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl  lg:w-2/5  justify-self-center rounded-full py-3 px-4 shadow-lg"
        >
          Add Contact
        </button>
      </form>
    </>
  );
}

export default CreateContact;
