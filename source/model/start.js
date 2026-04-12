import { movimientos } from "./moves.js";
import { pokemon } from "./pokemon.js";

export const iniciar = async () => {
  const buscar = await fetch(`https://pokeapi.co/api/v2/pokemon/lucario`);
  return await buscar.json();
};

iniciar(10).then((datos) => {
  const filtro = new pokemon(datos);
  const moves = new movimientos(filtro.moves);
  moves.info(20).then((datos) => console.log(datos));
});
