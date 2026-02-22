export async function getJSON(url){
  const res = await fetch(url);
  if(!res.ok) throw new Error("API error");
  return res.json();
}

export async function fetchPokemon(name){
  return getJSON(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

export async function fetchPokemonList(){
  return getJSON("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
}