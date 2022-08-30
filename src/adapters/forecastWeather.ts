import { Weather } from "../interfaces/interfaces";

export const getForecastWeatherAdapter = (untypedCurrentWeather: any): Weather[] => {
  const forecast: Weather[] = untypedCurrentWeather.list.map((weather: any) => ({
    main: weather.weather[0].main,
    description: weather.weather[0].description,
    icon: weather.weather[0].icon,
    temperature: {
      temp: weather.main.temp,
      temp_min: weather.main.temp_min,
      temp_max: weather.main.temp_max,
    },
  }));
  return forecast;
};
