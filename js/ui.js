import { capitalize } from "./utils.js";

export function renderPokemon(container,data){

  container.innerHTML = `
    <div class="pokemon-card">
      <img src="${data.sprites.other["official-artwork"].front_default}" />
      <p>${capitalize(data.name)}</p>
    </div>
  `;
}