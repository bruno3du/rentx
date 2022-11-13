import dotenv from "dotenv";
import express, { Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import "./shared/container";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NewableFunction) => {
    if (err instanceof AppError) {
      console.log(err);

      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error: ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log("Server is running Port 3333");
});
