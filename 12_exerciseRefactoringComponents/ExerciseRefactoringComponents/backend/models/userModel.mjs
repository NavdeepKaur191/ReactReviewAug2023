import bcrypt from "bcrypt";

// Password Salting and Hashing Functions
const salt = parseInt(process.env.SALT_ROUNDS);

export const hashPassword = async function (pass) {
  return bcrypt.hash(pass, salt, null);
};
export function compareCredentials(password, hash) {
  return bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      return err;
    }
    return result;
  });
}

var customers = [];

export async function createNewCustomer(customer, hash) {
  customers = [];
  customers.push({
    id: 1,
    first_name: customer.first_name,
    last_name: customer.last_name,
    email: customer.email,
    password: hash,
  });
  return customers;
}
