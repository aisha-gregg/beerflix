export async function requestBeers({ name } = {}) {
  const url = new URL(
    `https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers`
  );
  const filteredParams = Object.fromEntries(
    Object.entries({
      search: name,
      limit: 10
    }).filter(([key, value]) => value !== undefined)
  );

  url.search = new URLSearchParams(filteredParams).toString();
  const responseBeers = await fetch(url, {
    headers: {
      "X-API-KEY": "6MW904X-4A14S4D-GB8YHN6-VJ8JND1"
    }
  });

  const value = await responseBeers.json();
  return value.beers;
}
