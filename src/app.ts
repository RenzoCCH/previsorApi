import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import api from "./api";
import graphQl from "./graphQl";
import MessageResponse from "./types/interfaces/MessageResponse";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  }),
);
app.use(cors());
app.use(express.json());

app.get<object, MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);
app.use("/graphql", graphQl);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
