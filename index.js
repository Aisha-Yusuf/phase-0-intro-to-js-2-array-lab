const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(paka) {
  cats.push(paka);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(kitty) {
  const newCats = [...cats, kitty];
  return newCats;
}

function prependCat(kitten) {
  const newCats = [kitten, ...cats];
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0,-1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
