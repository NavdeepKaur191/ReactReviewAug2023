import HttpStatus from "http-status-codes";
import { createNewCustomer, hashPassword } from "../models/userModel.mjs";
export const create = async (req, res) => {
  const body = req.body;
  try {
    const hash = await hashPassword(body.password);
    const result = await createNewCustomer(body, hash);
    if (result == null) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send(
          "Sorry we could not process your submission, please check your values and submit again."
        );
    } else {
      res.status(HttpStatus.CREATED).json(result);
    }
  } catch (error) {
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
};
