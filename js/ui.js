export function renderPokemon(container,data){

  container.innerHTML = `
    <div class="pokemon-card">
      <img src="${data.sprites.other["official-artwork"].front_default}" />
      <p>${data.name}</p>
    </div>
  `;
}