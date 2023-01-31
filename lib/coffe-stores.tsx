import { createApi } from "unsplash-js";
import logger from "../logger";

const getUrlForCoffeeStores = (latLong: string, query: string, limit: string) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

  if (!UNSPLASH_ACCESS_KEY) throw new Error("UNSPLASH ACCESS KEY is missing from the environment variables");

  const unsplash = createApi({
    accessKey: UNSPLASH_ACCESS_KEY,
  });

  const photos = await unsplash.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 10,
  });

  if (photos.response == undefined) throw new Error("UNSPLASH ACCESS KEY is missing from the environment variables");

  const unsplachResults = photos.response.results;

  return unsplachResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async () => {
  const FOURSQUARE_API_KEY = process.env.FOURSQUARE_API_KEY;

  if (!FOURSQUARE_API_KEY) throw new Error("FOURSQUARE API KEY is missing from the environment variables");

  const photos = await getListOfCoffeeStorePhotos();

  logger.info(photos);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(getUrlForCoffeeStores("-0.021019013208513137%2C109.33001312451829", "kopi", "6"), options);

  const data = await response.json();

  return data.results.map((result: any, idx: any) => {
    return {
      ...result,
      imgUrl: photos[idx],
    };
  });
};
