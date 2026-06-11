import { capitalice } from "../../utility/capitalice.js";

export class pokemon {
  constructor(data) {
    // Nombre y Nro de la Pokedex
    this.pokemon = { name: capitalice(data.name), pokedex: data.id };
    //Devuelve un array de objetos
    this.moves = data.moves.map((movimientos) => {
      return {
        movimiento: movimientos.move.name,
        url: movimientos.move.url,
        detalles: movimientos.version_group_details.map((detalles) => {
          return {
            nivel: detalles.level_learned_at,
            metodo: detalles.move_learn_method.name,
          };
        }),
      };
    });
    // Devuelve un array de objetos
    this.abilities = data.abilities.map((habilidad) => {
      return { name: habilidad.ability.name };
    });
    // Datos en crudo para seguir haciendo pruebas
    this.crud = data;
    // Total de Estadisticas juntas (Falta hacerlo por propiedad)
    this.stats = data.stats.reduce((acumulador, dato) => {
      return acumulador + dato.base_stat;
    }, 0);
  }
  toJson() {
    return {
      pokemon: this.pokemon,
      moves: this.moves,
      abilities: this.abilities,
      stats: this.stats,
    };
  }
}
