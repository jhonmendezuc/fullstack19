import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.URL_BASE_DATOS;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const cliente = await client.connect();
    // Send a ping to confirm a successful connection
    await cliente.db("liberia").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const autorColeccion = cliente.db("liberia").collection("autor");
    const autores = await autorColeccion.find().toArray();
    console.log(autores);
    console.log(typeof autores);
  } catch {
    console.log("error");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
