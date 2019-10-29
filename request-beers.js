export async function requestBeers() {
  const responseBeers = await fetch(
    `https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers?limit=10`,
    {
      headers: {
        "X-API-KEY": "6MW904X-4A14S4D-GB8YHN6-VJ8JND1"
      }
    }
  );

  const value = await responseBeers.json();
  return value.beers;
}
