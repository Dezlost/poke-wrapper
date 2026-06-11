import express from "express";
import { mainRouter } from "./routes/inicio.router.js";
import { rastreador } from "./middlewares/rastreo.js";
import cors from "cors";
const app = express();
const port = process.env.PORT ?? 1234;

//importante para que express pueda recibir y/o entender lo que le mandamos
app.use(express.json());
app.use(rastreador);
app.use(cors());
app.use("/", mainRouter);
//
// app.use((req, res) => {
//   res.status(404).send("<h1>Pagina no encontrada<h1/>");
// });
app.listen(port, () => {
  console.log(`Todo corriendo en el http://localhost:${port}`);
});
