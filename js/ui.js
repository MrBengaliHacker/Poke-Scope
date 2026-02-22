import { capitalize, formatStatName } from "./utils.js";

export function renderLoading(container, text) {
  container.innerHTML = `<div class="loading">${text}</div>`;
}

export function renderSidebar(nameList, list) {
  const sorted = list.results.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  nameList.innerHTML = sorted
    .map(p => `<li class="poke-name">${p.name}</li>`)
    .join("");
}

export function renderPokemon(container, data) {
  const types = data.types.map(t => t.type.name).join(", ");

  const stats = data.stats
    .map(s => `
      <div class="pokemon-stat">
        <span>${formatStatName(s.stat.name)}:</span>
        ${s.base_stat}
      </div>
    `)
    .join("");

  container.innerHTML = `
    <div class="pokemon-card">
      <div class="pokemon-image">
        <img src="${data.sprites.other["official-artwork"].front_default}" />
      </div>

      <div class="pokemon-details">
        <p><span>Name:</span> ${capitalize(data.name)}</p>
        <p><span>Type:</span> ${types}</p>
        <p><span>Height:</span> ${data.height}</p>
        <p><span>Weight:</span> ${data.weight}</p>
      </div>

      <div class="pokemon-stats">
        ${stats}
      </div>
    </div>
  `;
}

export function renderError(container, message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}