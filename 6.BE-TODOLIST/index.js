import express, { json } from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();
dotenv.config();

//midleware: json
app.use(json());

//midleware rutas: responde a rutas de los clientes
app.use("/task", taskRoutes);

//midleware not found: ruta no encontrada
app.use((req, res) => {
  res.status(404).send("ruta no encontrada");
});

app.listen(process.env.PORT_BE, () => {
  console.log("Server is running on port", process.env.PORT_BE);
});
