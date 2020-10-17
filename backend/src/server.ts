import express from "express";
import path from "path";
import cors from "cors";
import "express-async-errors";

import "./database/connection";

import routes from "./routes";
import errorhandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/tmp", express.static(path.join(__dirname, "..", "tmp")));
app.use(errorhandler);

app.listen(3333, () => {
  console.log("server started");
});
