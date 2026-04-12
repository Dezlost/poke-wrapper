import { createServer, IncomingMessage, ServerResponse } from "node:http";

const serverconfig = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/pokemon") {
    return res.end("<h1>Pagina de pokemons</h1>");
  }
  if (req.url === "/datos") {
    return res.end("<h2>aqui iran los datos</h2>");
  }
  if (req.url === "/") {
    return res.end("<h3>Bienvenido al inicio</h3>");
  }

  res.end("Pagina no encontrado 404");
};
const server = createServer(serverconfig);

// const server = http.createServer((req, res) => {
//   console.log("request recibida: ", req.url);
//   res.end("Hola mundo");
// });

server.listen(3000, () => {
  console.log(`todo corriendo en http://localhost:${server.address().port}`);
});
