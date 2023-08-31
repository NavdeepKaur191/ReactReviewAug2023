import { Router } from "express";
import { create } from "../controllers/userController.mjs";

const router = Router();

router.route("/").post(create);

export default router;
