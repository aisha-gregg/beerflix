export function sortBeers(beers) {
  return beers.slice().sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
}
