import { movimientos } from "../model/moves.js";
import { pokemon } from "../model/pokemon.js";
import { iniciar } from "../model/start.js";

export const main_controlador = async (req, res) => {
  const { pokemon: info } = req.params;
  try {
    const data = await iniciar(info);
    const poke = new pokemon(data);
    const movimiento = new movimientos(poke.moves);
    let atributos;
    try {
      atributos = await movimiento.info();
    } catch (error) {
      atributos = "No cargaron";
    }
    res.send({
      pokemon: poke.pokemon,
      moves: atributos,
      abilities: poke.abilities,
      stats: poke.stats,
      ok: true,
    });
  } catch (error) {
    res
      .status(404)
      .send({ info: "pokemon no encontrado", error: error, ok: false });
  }
};
