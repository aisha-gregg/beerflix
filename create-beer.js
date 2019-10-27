export function createBeer({
  beerId,
  name,
  description,
  image,
  comment,
  likes,
  firstBrewed
}) {
  return {
    id: beerId,
    name,
    description,
    photo: image,
    comments: comment || [],
    likes,
    date: formatToDate(firstBrewed)
  };
}

function formatToDate(outdatedFormat) {
  const [month, year] = outdatedFormat.split("/");
  const date = new Date(Date.UTC(year, month, 1));
  return date;
}
