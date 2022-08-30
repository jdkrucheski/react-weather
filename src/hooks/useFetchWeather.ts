import { useEffect, useState } from "react";
import { Weather, Location } from "../interfaces/interfaces";
import { getCurrentWeather, getForecastWeather } from "../service/openweather";

const defaultLocations = { id: "AR-X", country: "Argentina", city: "Córdoba" };

export const useFetchWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [forecastWeather, setForecastWeather] = useState<Weather[]>();
  const [selectedLocations, setSelectedLocations] = useState<Location>(defaultLocations);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getWeather = () => {
    const currentWeather = getCurrentWeather(selectedLocations);
    const forecastWeather = getForecastWeather(selectedLocations);
    Promise.all([currentWeather, forecastWeather])
      .then((values) => {
        setCurrentWeather(values[0]);
        setForecastWeather(values[1]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getWeather();
  }, [selectedLocations]);

  return {
    currentWeather,
    error,
    forecastWeather,
    isLoading,
    selectedLocations,
    setIsLoading,
    setSelectedLocations,
  };
};
