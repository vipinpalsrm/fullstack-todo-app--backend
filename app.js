const app = express();
import router from "./routes/ToDoRoute";
import { mongoconnection } from "./db";
import bodyParser from "body-parser";
import cors from "cors";

import express from "express";
require("dotenv").config();

mongoconnection();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

export default app;
