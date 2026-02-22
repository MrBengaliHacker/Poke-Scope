import { fetchPokemon } from "./api.js";
import { renderPokemon } from "./ui.js";

const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".pokemon-result");

button.addEventListener("click", async ()=>{
  const name = input.value.trim();
  if(!name) return;

  const data = await fetchPokemon(name);
  renderPokemon(result,data);
});