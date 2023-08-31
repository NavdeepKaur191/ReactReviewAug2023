import express from "express";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { products } from "./productsData.mjs";

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/api", (request, response) => {
  response.send(products);
});
app.listen(3030, () => {
  console.log("Listen on the port 3030...");
});
