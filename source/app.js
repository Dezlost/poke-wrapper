import express from "express";

const app = express();
const port = 3000 || 0;

app.get("/", (req, res) => {
  res.end("Hola");
});

app.listen(port, () => {
  console.log(`Todo corriendo en el http://localhost:${port}`);
});
