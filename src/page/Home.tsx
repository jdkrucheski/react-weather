import { useEffect, useState } from "react";
import { getLocationsAdapter } from "../adapters/locationes";
import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather";
import { ForecastWeather } from "../components/ForecastWeather/ForecastWeather";
import { Loading } from "../components/Loading/Loading";
import { Selector } from "../components/Selector/Selector";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { Weather, Location } from "../interfaces/interfaces";
import untypedLocations from "../data/locations.json";

const defaultLocations = { id: "AR-X", country: "Argentina", city: "Córdoba" };

interface Props {
  currentWeather: Weather | undefined;
  forecastWeather: Weather[] | undefined;
}

const RenderWeather = ({ currentWeather, forecastWeather }: Props) => {
  return (
    <>
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecastWeather && <ForecastWeather forecastWeather={forecastWeather} />}
    </>
  );
};

export const Home = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<Location>(defaultLocations);

  const { currentWeather, forecastWeather, isLoading, error } =
    useFetchWeather(selectedLocations);

  useEffect(() => {
    const locations = getLocationsAdapter(untypedLocations);
    setLocations(locations);
    setSelectedLocations(locations[0]);
  }, []);

  const handleSelectedLocation = (selectedLocation: Location) => {
    setSelectedLocations(selectedLocation);
  };

  if (error !== "") {
    return (
      <>
        <span>Ocurrió un error: </span>
        <span>
          <b>{error}</b>
        </span>
      </>
    );
  }

  return (
    <div className="App">
      <Selector
        selected={selectedLocations}
        handleSelect={handleSelectedLocation}
        options={locations}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <RenderWeather currentWeather={currentWeather} forecastWeather={forecastWeather} />
      )}
    </div>
  );
};
