import { createContext } from "react";
import { Location, Weather } from "../interfaces/interfaces";

interface AppContext {
  currentWeather: Weather | undefined;
  error: string;
  forecastWeather: Weather[] | undefined;
  isLoading: boolean;
  selectedLocations: Location;
  setSelectedLocations: (location: Location) => void;
}

export const AppContext = createContext({} as AppContext);
