const input = document.querySelector("input");
const button = document.querySelector("button");
import { fetchPokemon } from "./api.js";

button.addEventListener("click", async ()=>{
  const name = input.value.trim();
  if(!name) return;

  const data = await fetchPokemon(name);
  console.log(data);
});