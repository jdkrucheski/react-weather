import { useEffect, useState } from "react";
import { getLocationsAdapter } from "./adapters/locationes";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { Selector } from "./components/Selector/Selector";
import untypedLocations from "./data/locations.json";
import { ICurrentWeather, Location } from "./interfaces/interfaces";
import { getCurrentWeather } from "./service/openweather";

export const App = () => {
  const [locations, setLocations] = useState<Location[]>();
  const [selectedLocations, setSelectedLocations] = useState<Location>();
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [error, setError] = useState("");

  useEffect(() => {
    const locations = getLocationsAdapter(untypedLocations);
    setSelectedLocations(locations[0]);
    setLocations(locations);
  }, []);

  useEffect(() => {
    selectedLocations &&
      getCurrentWeather(selectedLocations)
        .then((data) => setCurrentWeather(data))
        .catch((err) => setError(err.message));
  }, [selectedLocations]);

  const handleSelectedLocation = (selectedLocation: Location) => {
    setSelectedLocations(selectedLocation);
    console.log(selectedLocation);
  };

  if (error !== "") {
    return (
      <div>
        <span>Ocurrió un error: </span>
        <span>
          <b>{error}</b>
        </span>
      </div>
    );
  }

  return (
    <div className="App">
      {!!locations && selectedLocations && (
        <Selector
          selected={selectedLocations}
          handleSelect={handleSelectedLocation}
          options={locations}
        />
      )}
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </div>
  );
};

export default App;
