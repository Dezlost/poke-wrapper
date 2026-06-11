const boton = document.getElementById("boton");
const poke = document.getElementById("buscador");
boton.addEventListener("click", () => {
  let nombre = poke.value.trim().toLowerCase()
  fetch(`http://localhost:3000/${nombre}`)
    .then((data) => data.json())
    .then((resultado) => mostar(resultado) )
});

function mostar(data) {
  console.log(data)
  const contenedor = document.getElementById("contenedor")
  
  if(!data.ok) {
    return contenedor.innerHTML = `<h2>${"Data no encontrada"}<h2>`
  }

  return contenedor.innerHTML = `<div>
  <h2>${data.pokemon.name}<h2/>
  <h3>${data.pokemon.pokedex}</h3>
  <ul> ${data.moves.map((i) =>
    `<li>
      <h6>${i.movimiento}</h6>
      <p>${i.tipo_daño.name}</p>
      <p>${i.info}</p>
    </li>`
   )} </ul>  
  </div>
  `
}
