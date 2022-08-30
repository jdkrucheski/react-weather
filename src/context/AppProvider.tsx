import { ReactElement } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const {
    currentWeather,
    forecastWeather,
    isLoading,
    error,
    selectedLocations,
    setSelectedLocations,
  } = useFetchWeather();

  return (
    <AppContext.Provider
      value={{
        currentWeather,
        forecastWeather,
        isLoading,
        error,
        selectedLocations,
        setSelectedLocations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
