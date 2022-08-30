import { useEffect, useState } from "react";
import { Weather, Location } from "../interfaces/interfaces";
import { getCurrentWeather, getForecastWeather } from "../service/openweather";

export const useFetchWeather = (location: Location) => {
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [forecastWeather, setForecastWeather] = useState<Weather[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getCurrent = async () => {
    getCurrentWeather(location)
      .then((data) => setCurrentWeather(data))
      .catch((err) => setError(err.message));
  };

  const getForecast = async () => {
    getForecastWeather(location)
      .then((data) => setForecastWeather(data))
      .catch((err) => setError(err.message));
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getCurrent();
    getForecast();
  }, [location]);

  return {
    currentWeather,
    forecastWeather,
    isLoading,
    error,
  };
};
