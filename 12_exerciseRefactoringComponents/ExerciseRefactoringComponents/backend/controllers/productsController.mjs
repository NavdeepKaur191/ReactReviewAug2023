import { getAll, findOne } from "../models/productsModel.mjs";

export async function index(req, res) {
  try {
    const result = await getAll();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function show(req, res) {
  const id = parseInt(req.params.id);
  try {
    const result = await findOne(id);
    if (result == null) {
      res.status(405).send("Sorry no item with that id");
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
