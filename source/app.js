import express from "express";
import { log } from "node:console";

const app = express();
const port = process.env.PORT || 1234;

app.get("/", (req, res) => {
  res.end("Hola");
});

app.listen(port, () => {
  console.log(`Todo corriendo en el http://localhost:${port}`);
});


