// Redis-demo
import express from "express";
import { router } from "./redis-demo/index";

const app = express();
app.use(express.json());

router(app);

app.listen("3000", () => {
  console.log("Server is listenning at http://localhost:3000/");
});
