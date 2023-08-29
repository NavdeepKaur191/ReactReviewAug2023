// eslint-disable-next-line import/no-unresolved
import contactImgUrl from "url:../images/baseline_perm_identity_black_48dp.png";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

function Contact({ imgSrc = contactImgUrl, name, telNumber, email }) {
  return (
    <figure className="w-56 flex flex-col items-center bg-gray-50  rounded-xl p-8 space-y-2 shadow-xl ">
      <div>
        <img
          className="w-24 h-24 rounded-full"
          src={imgSrc}
          alt="the contact's headshot"
        />
      </div>
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="font-light text-gray-500">{formatPhoneNumber(telNumber)}</p>
      <p className="font-light text-gray-500">{email}</p>
    </figure>
  );
}

export default Contact;
