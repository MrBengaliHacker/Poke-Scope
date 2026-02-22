import { fetchPokemonList, fetchPokemon } from "./api.js";
import { renderLoading, renderSidebar, renderPokemon, renderError } from "./ui.js";

const nameList = document.getElementById("name-list");
const pokeResult = document.querySelector(".pokemon-result");
const input = document.querySelector("input");
const button = document.querySelector("button");

init();

button.addEventListener("click", handleSearch);
input.addEventListener("keyup", e => {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const name = input.value.trim();
  if (name) loadPokemon(name);
}

async function init() {
  try {
    renderLoading(pokeResult, "Loading list...");
    const list = await fetchPokemonList();

    renderSidebar(nameList, list);
    pokeResult.innerHTML = "Search Pokemon";

    nameList.addEventListener("click", e => {
      if (e.target.classList.contains("poke-name")) {
        loadPokemon(e.target.textContent);
      }
    });

  } catch {
    renderError(pokeResult, "Failed to load list");
  }
}

async function loadPokemon(name) {
  try {
    renderLoading(pokeResult, "Loading pokemon...");
    const data = await fetchPokemon(name);
    renderPokemon(pokeResult, data);
  } catch {
    renderError(pokeResult, "Pokemon not found");
  }
}