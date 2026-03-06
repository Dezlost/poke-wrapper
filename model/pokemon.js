import { capitalice } from "../utility/capitalice.js";
import { iniciar } from "./start.js";

export class pokemon {
  constructor(data) {
    this.pokemon = { name: capitalice(data.name), pokedex: data.id };
    this.moves = data.moves.map((movimientos) => {
      return { movimiento: movimientos.move.name, url: movimientos.move.url };
    });
    this.abilities = data.abilities.map((habilidad) => {
      return { name: habilidad.ability.name };
    });
    this.crud = data;
    this.stats = data.stats.reduce((acumulador, dato) => {
      return acumulador + dato.base_stat;
    }, 0);
  }
}


//   async inicializador(pokemon) {
//     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//     const procesada = await data.json();
//     this.pokemon = { name: capitalice(procesada.name), pokedex: procesada.id };
//     this.moves = procesada.moves.map((movimientos) => {
//       return {
//         movimiento: movimientos.move.name,
//         url: movimientos.move.url,
//       };
//     });
//     this.abilities = procesada.abilities.map((habilidad) => {
//       return {
//         nombre: habilidad.ability.name,
//         url: habilidad.ability.url,
//       };
//     });
//     this.crud = procesada;
//     this.stats = procesada.stats;
//     return "pokemon correctamente cargado";
//   }
//   get estadisticas() {
//     return this.stats;
//   }
// }
//
// let pablito = new pokemon();
// pablito.inicializador("dragonite").then((mensaje) => {
//   console.log(mensaje);
//   //console.log(pablito.pokemon.name)
//   const total = pablito.crud.stats;
//   const stats = total.reduce((acc, item) => {
//     return acc + item.base_stat;
//   }, 0);
//   console.log((2 * stats * 50) / 100);
//   // console.log(pablito.pokemon.abilities)
// });
//
// console.log(pablito.estadisticas());
