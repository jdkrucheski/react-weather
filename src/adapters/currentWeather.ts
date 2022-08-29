import { CurrentWeather } from "../interfaces/interfaces";

export const getCurrentWeatherAdapter = (untypedCurrentWeather: any): CurrentWeather => {
  return {
    main: untypedCurrentWeather.weather[0].main,
    description: untypedCurrentWeather.weather[0].description,
    icon: untypedCurrentWeather.weather[0].icon,
    temperature: {
      temp: untypedCurrentWeather.main.temp,
      temp_min: untypedCurrentWeather.main.temp_min,
      temp_max: untypedCurrentWeather.main.temp_max,
    },
  };
};
