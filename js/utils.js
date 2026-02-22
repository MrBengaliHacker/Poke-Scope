export function capitalize(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatStatName(name){
  return name.replace("-", " ").replace(/\b\w/g,c=>c.toUpperCase());
}