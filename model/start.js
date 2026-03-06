import { pokemon } from "./pokemon.js";

export const iniciar = async () => {
  const buscar = await fetch(`https://pokeapi.co/api/v2/pokemon/lucario`) 
  return await buscar.json()
};

iniciar().then(datos => {
  const filtro = new pokemon(datos)
  console.log(filtro.moves)
})
