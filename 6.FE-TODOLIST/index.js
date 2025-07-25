import express, { json } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(json);

app.get("/task", (req, res) => {
  res.send("tareas");
});

app.listen(process.env.PORT, () => {
  console.log("servidor en el puerto... ", process.env.PORT_BE);
});
