import dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";

import "reflect-metadata";
import "./database";
import "./shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.listen(3333, () => {
  console.log("Server is running Port 3333");
});
