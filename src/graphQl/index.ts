import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import express from "express";
import { readFile } from "node:fs/promises";
import { resolvers } from "../schema/resolvers";

const router = express.Router();
(async () => {
  const setupDefs = await readFile("./src/schema/schema.graphql", "utf-8");
  const typesDefs = await readFile("./src/schema/types.graphql", "utf-8");
  const quizTakenDef = await readFile(
    "./src/schema/quizTakenSchema/quizTaken.graphql",
    "utf-8",
  );
  const quizDef = await readFile(
    "./src/schema/quizSchema/quiz.graphql",
    "utf-8",
  );
  const apolloServer = new ApolloServer({
    typeDefs: [setupDefs, quizTakenDef, quizDef, typesDefs],
    resolvers,
  });
  await apolloServer.start();

  router.use("/", express.json(), apolloMiddleware(apolloServer));
})();

export default router;
