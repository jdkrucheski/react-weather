import { useContext, useEffect, useState } from "react";
import { getLocationsAdapter } from "../adapters/locationes";
import { CurrentWeather } from "../components/CurrentWeather/CurrentWeather";
import { ForecastWeather } from "../components/ForecastWeather/ForecastWeather";
import { Selector } from "../components/Selector/Selector";
import { Location } from "../interfaces/interfaces";
import untypedLocations from "../data/locations.json";
import { AppContext } from "../context/AppContext";
import { Loading } from "../components/Loading/Loading";

const RenderWeather = () => {
  const { currentWeather, forecastWeather } = useContext(AppContext);
  return (
    <section className="container">
      <CurrentWeather currentWeather={currentWeather!} />
      <ForecastWeather forecastWeather={forecastWeather!} />
    </section>
  );
};

export const HomePage = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  const { isLoading, selectedLocations, setSelectedLocations } = useContext(AppContext);

  useEffect(() => {
    const locations = getLocationsAdapter(untypedLocations);
    setLocations(locations);
    setSelectedLocations(locations[0]);
  }, []);

  const handleSelectedLocation = (selectedLocation: Location) => {
    setSelectedLocations(selectedLocation);
  };

  return (
    <>
      <Selector
        selected={selectedLocations}
        handleSelect={handleSelectedLocation}
        options={locations}
      />

      {isLoading ? <Loading /> : <RenderWeather />}
    </>
  );
};
