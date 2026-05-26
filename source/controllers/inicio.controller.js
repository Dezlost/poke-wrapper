import { iniciar } from "../model/start.js";
export const main_controlador = (req, res) => {
  const { pokemon } = req.params;
  iniciar(pokemon)
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(404).send({ info: "pokemon no encontrado", error: error });
    });
};
