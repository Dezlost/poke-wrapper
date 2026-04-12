fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    const datos = respuesta;
    const info = {
      nombre: datos.name,
      habilidad: datos.abilities[0].ability.name,
    };
    console.log(info);
  });
