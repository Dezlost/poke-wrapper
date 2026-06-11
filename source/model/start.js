import { pokemon } from "./pokemon.js";

export const iniciar = async (busqueda) => {
  const buscar = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);
  return await buscar.json();
};
