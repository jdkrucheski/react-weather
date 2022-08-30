import { Weather } from "../../interfaces/interfaces";

export interface Props {
  currentWeather: Weather;
}

export const CurrentWeather = ({ currentWeather }: Props) => {
  // TODO: Create a loading
  return (
    <div>
      <span>{currentWeather.location}</span>
      <span>{currentWeather.main}</span>
      <span>{currentWeather.description}</span>
      <span>{JSON.stringify(currentWeather.temperature)}</span>
      <img
        src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
        alt="currentWeather.main"
      />
    </div>
  );
};
