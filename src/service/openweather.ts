import { getCurrentWeatherAdapter } from "../adapters/currentWeather";
import config from "../config";
import { Location } from "../interfaces/interfaces";

const WEATHER_KEY = config.api_key;

const BASE_URL = "https://api.openweathermap.org";
const CURRENT_WEATHER_URL = BASE_URL + "/data/2.5/weather?";

export const getCurrentWeather = async ({ city, country }: Location) => {
  try {
    const response = await fetch(
      `${CURRENT_WEATHER_URL}q=${city},${country}&appid=${WEATHER_KEY}&units=metric&lang=es`
    );
    const data = await response.json();
    const weather = getCurrentWeatherAdapter(data);
    return weather;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};
