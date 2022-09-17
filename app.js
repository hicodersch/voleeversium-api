import express from "express";

// Middlewares
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

 //Routers
 import voleRouter from "./routes/volee-router.js";
// import incomeRouter from "./routes/income-router.js";
// import expensesRouter from "./routes/expenses-router.js";

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routers
app.use("/volee", voleRouter);
// app.use("/income", incomeRouter);
// app.use("/expenses", expensesRouter);

app.listen(3001, () => {
  console.log("listening on 3001");
});
