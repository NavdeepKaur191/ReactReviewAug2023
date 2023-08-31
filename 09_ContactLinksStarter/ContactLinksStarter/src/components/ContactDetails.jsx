import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";
import contactImgUrl from "url:../images/baseline_perm_identity_black_48dp.png";

function ContactDetails() {
  let { contactId } = useParams();
  var navigate = useNavigate();
  let url = `http://contactlist.us-east-1.elasticbeanstalk.com/contact/${contactId}`;
  const [data, error] = useFetch(url);
  const [updateContactsData, setUpdateContactsData] = useState(data);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setUpdateContactsData(data);
  }, [data]);

  function handleUpdatingValue(e) {
    setUpdateContactsData({
      ...updateContactsData,
      [e.target.id]: e.target.value,
    });
  }

  function updateContact() {
    if (editing === true) {
      setEditing(!editing);

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateContactsData),
      });
    } else {
      setEditing(!editing);
    }
  }

  async function deleteContact() {
    await fetch(url, {
      method: "DELETE",
    });

    navigate("/");
  }

  return (
    <>
      <nav className="md:w-3/4 m-auto mt-8 ">
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

      {/* Show Error if data is null */}
      {error !== null ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700  md:w-2/5 lg:max-w-md px-4 py-3 rounded-md m-auto mt-24"
          role="alert"
        >
          <p className=" text-xl text-center">
            <strong>Sorry!</strong> It seems that this contact is missing or has
            been deleted.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center my-16 mx-2 md:w-1/2 lg:w-2/5 md:mx-auto shadow-xl bg-gray-50 rounded  pt-8 p-4 px-8">
          <div className="flex flex-col items-center ">
            {/* Start of Head shot and Name */}
            <div className="flex flex-col justify-center w-64 h-64 bg-gray-300 border-gray-300 rounded-full border-2 shadow-xl text-center p-8 -m-32">
              <figure>
                <img
                  className="m-auto"
                  src={updateContactsData.imgSrc || contactImgUrl}
                  alt="the contact's head shot"
                />
              </figure>

              {!editing ? (
                <h1 className="text-2xl font-semibold">{`${updateContactsData.firstName} ${updateContactsData.lastName}`}</h1>
              ) : (
                <form className="flex justify-around ">
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder={updateContactsData.firstName}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl w-24 mr-2 p-1 rounded"
                  />

                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder={updateContactsData.lastName}
                    onChange={handleUpdatingValue}
                    className="font-light text-xl w-24 mr-2 p-1 rounded"
                  />
                </form>
              )}
            </div>
            {/* End of Head shot and Name */}

            {/* Remaining contact fields */}

            {!editing ? (
              <div className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                {/* Company */}
                <h2 className="font-bold text-xl ">Company:</h2>
                <p className="font-light text-xl p-1 rounded ">
                  {updateContactsData.company}
                </p>

                {/*Phone Number  */}
                <h2 className="font-bold text-xl">Phone Number:</h2>
                <p className="font-light text-xl p-1 rounded ">
                  {formatPhoneNumber(updateContactsData.phone)}
                </p>

                {/* Email */}
                <h2 className="font-bold text-xl">Email:</h2>
                <p className="font-light text-xl p-1 rounded">
                  {updateContactsData.email}
                </p>
              </div>
            ) : (
              <form className="grid grid-cols-2 gap-3 items-center justify-items-center mt-32 pt-8">
                <label htmlFor="company" className="font-bold text-xl">
                  Company:
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder={updateContactsData.company}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
                <label htmlFor="phone" className="font-bold text-xl">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder={formatPhoneNumber(updateContactsData.phone)}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
                <label htmlFor="email" className="font-bold text-xl">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={updateContactsData.email}
                  onChange={handleUpdatingValue}
                  className="font-light text-xl"
                />
              </form>
            )}

            {/* End of contact fields */}

            {/* Edit and Delete Buttons */}
            <div className="flex justify-around my-6 w-2/5 mx-auto pt-2 space-x-4">
              <button
                className="bg-blue-600 rounded-full py-4 px-8 text-white hover:bg-gray-50 hover:border-blue-400  hover:text-blue-400 hover:shadow-2xl border-2"
                onClick={updateContact}
              >
                {!editing ? "Edit" : "Save"}
              </button>

              {/* Delete Button */}
              <button
                className="bg-red-600 rounded-full py-4 px-8 text-white hover:bg-gray-50 hover:border-red-400  hover:text-red-400 hover:shadow-2xl border-2"
                onClick={deleteContact}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactDetails;
