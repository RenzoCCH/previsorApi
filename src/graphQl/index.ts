import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import express from "express";
import { readFile } from "node:fs/promises";
import { resolvers } from "../schema/resolvers";

const router = express.Router();
(async () => {
  const typeDefs = await readFile("./src/schema/schema.graphql", "utf-8");
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  router.use("/", express.json(), apolloMiddleware(apolloServer));
})();

export default router;
