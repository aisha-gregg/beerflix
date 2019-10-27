export function createBeer({
  beerId,
  name,
  description,
  image,
  comment,
  likes
}) {
  return {
    id: beerId,
    name,
    description,
    photo: image,
    comments: comment || [],
    likes
  };
}
