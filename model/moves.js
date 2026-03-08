export class movimientos {
  constructor(data) {
    this.movimientos = data;
  }
  async info(offset = 50) {
    const final = [];
    for (let i = 0; i < offset; i++) {
      const info = await fetch(this.movimientos[i].url);
      const real = await info.json();
      const array_lenguaje = real.flavor_text_entries.filter(
        (objetos) => objetos.language.name == "es",
      )[0];
      final.push( {
        movimiento: this.movimientos[i].movimiento,
        tipo_daño: real.damage_class,
        info: array_lenguaje.flavor_text,
      });
    }
    return final
  }
  mostrar_info() {

  }
}
