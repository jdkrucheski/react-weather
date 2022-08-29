import { ICurrentWeather } from "../interfaces/interfaces";

export const getCurrentWeatherAdapter = (untypedCurrentWeather: any): ICurrentWeather => {
  return {
    main: untypedCurrentWeather.weather[0].main,
    description: untypedCurrentWeather.weather[0].description,
    icon: untypedCurrentWeather.weather[0].icon,
    location: `${untypedCurrentWeather.name}, ${untypedCurrentWeather.sys.country}`,
    temperature: {
      temp: untypedCurrentWeather.main.temp,
      temp_min: untypedCurrentWeather.main.temp_min,
      temp_max: untypedCurrentWeather.main.temp_max,
    },
  };
};
