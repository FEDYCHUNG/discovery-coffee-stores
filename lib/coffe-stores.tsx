const getUrlForCoffeeStores = (latLong: string, query: string, limit: string) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  const FOURSQUARE_API_KEY = process.env.FOURSQUARE_API_KEY;

  if (!FOURSQUARE_API_KEY) {
    throw new Error("FOURSQUARE API KEY is missing from the environment variables");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(getUrlForCoffeeStores("-0.021019013208513137%2C109.33001312451829", "kopi", "6"), options);

  const data = await response.json();

  return data.results;
};
