import express from "express";

// Middlewares
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

 //Routers
 import voleeRouter from "./routes/volee-router.js";
 import proVoleeRouter from './routes/proVolee-router.js'
 import noneProfitOrgRouter from './routes/noneProfitOrg-router.js'


let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routers
app.use("/volee", voleeRouter);
app.use("/proVolee", proVoleeRouter);
app.use("/noneProfitOrg", noneProfitOrgRouter);

app.listen(3001, () => {
  console.log("listening on 3001");
});
