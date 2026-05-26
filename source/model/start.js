import { movimientos } from "./moves.js";
import { pokemon } from "./pokemon.js";

export const iniciar = async (pokemon) => {
  const buscar = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  return await buscar.json();
};
