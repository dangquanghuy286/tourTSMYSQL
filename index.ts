import express, { Express } from "express";
// import sequelize from "./config/database";
import dotenv from "dotenv";
import clientRouter from "./routers/client/index.route";

dotenv.config();
// sequelize;

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Nhung file tinh
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

// Client Routes
clientRouter(app);

app.listen(port, () => {
  console.log(`App listen on port http://localhost:${port}`);
});
