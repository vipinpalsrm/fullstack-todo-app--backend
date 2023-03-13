const app = express();
import cors from "cors";
import { mongoconnection } from "./db";
import router from "./routes/ToDoRoute";
import bodyParser from "body-parser";

import express from "express";
require("dotenv").config();

mongoconnection();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

export default app;
