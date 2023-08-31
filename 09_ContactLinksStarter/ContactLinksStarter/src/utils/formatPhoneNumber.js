export function formatPhoneNumber(phoneNumber) {
  if (phoneNumber == null) {
    return;
  }

  var cleanedString = phoneNumber.toString().replace(/[^A-Za-z0-9]+/g, "");

  if (cleanedString.length <= 3) {
    return cleanedString;
  } else if (cleanedString.length <= 7) {
    return `${cleanedString.slice(0, 3)}-${cleanedString.slice(3)}`;
  } else {
    return `${cleanedString.slice(0, 3)}-${cleanedString.slice(
      3,
      6
    )}-${cleanedString.slice(6, 10)}`;
  }
}
