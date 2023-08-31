import { Router } from "express";
import { index, show } from "../controllers/productsController.mjs";

const router = Router();

router.route("/").get(index);

router.route("/:id").get(show);

export default router;
