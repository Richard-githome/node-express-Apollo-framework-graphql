import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { loadFilesSync } from "@graphql-tools/load-files";


// const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const typesArray = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
// const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
const resolversArray = loadFilesSync("**/*", {
  extensions: ["resolvers.js"],
});

const PORT = 3000;

const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: typesArray,
    resolvers: resolversArray,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  httpServer.listen(
    PORT,
    console.log(`Running a graphql server...@ port ${PORT}`)
  );
};


startServer();