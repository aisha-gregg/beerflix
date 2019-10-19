export async function requestBeers() {
  const response = await fetch(
    "https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers",
    {
      headers: {
        "X-API-KEY": "6MW904X-4A14S4D-GB8YHN6-VJ8JND1"
      }
    }
  );
  const value = await response.json();
  return value.beers;
}
