export async function postComment(id, comment) {
  const response = await fetch(
    `https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers/${id}/comment`,
    {
      body: JSON.stringify({
        comment: comment
      }),
      method: "POST",
      accept: "application/json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-KEY": "6MW904X-4A14S4D-GB8YHN6-VJ8JND1"
      }
    }
  );

  return response;
}
