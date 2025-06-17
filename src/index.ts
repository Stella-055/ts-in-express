import express, { Express } from "express";
import taskroute from "./routes/task";
const app: Express = express();
app.use(express.json());
app.get("/", (_req, res) => {
  res.send(` <h1> Welcome to Tasks manager API</h1>`);
});

app.use("/task", taskroute);
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("server is running");
});
