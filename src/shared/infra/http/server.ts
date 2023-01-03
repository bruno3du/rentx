import "reflect-metadata";
import "express-async-errors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AppError } from "shared/errors/AppError";
import { router } from "shared/infra/http/routes";
import { createConnection } from "shared/infra/typeorm";
import swaggerUI from "swagger-ui-express";
import "shared/container";

import swaggerFile from "../../../swagger.json";

dotenv.config();

createConnection();

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NewableFunction) => {
    if (err instanceof AppError) {
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
