import { getCurrentWeatherAdapter } from "../adapters/currentWeather";
import config from "../config";
import { Location } from "../interfaces/interfaces";

const WEATHER_KEY = config.api_key;
const BASE_URL = "https://api.openweathermap.org";
const CURRENT_WEATHER_URL = BASE_URL + "/data/2.5/weather?";

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
  }
}

const handleError = (status: number) => {
  switch (status) {
    case 401:
      throw new NetworkError("You are not authorized, check your API key");
      break;
    case 404:
      throw new NetworkError("The resource you requested was not found");
      break;
    case 500:
      throw new NetworkError("There was a server error");
      break;
    default:
      throw new NetworkError("Network error");
  }
};

export const getCurrentWeather = async ({ city, country }: Location) => {
  try {
    const response = await fetch(
      `${CURRENT_WEATHER_URL}q=${city},${country}&appid=${WEATHER_KEY}&units=metric&lang=es`
    );
    if (!response.ok) {
      return handleError(response.status);
    }
    const data = await response.json();
    const weather = getCurrentWeatherAdapter(data);
    return weather;
  } catch (error) {
    if (error instanceof Error) {
      throw new NetworkError(error.message);
    }
  }
};
