export function createBeer({ beerId, name, description, image }) {
  return {
    id: beerId,
    name,
    description,
    photo: image
  };
}
