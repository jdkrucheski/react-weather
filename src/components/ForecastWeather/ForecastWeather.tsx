import { Weather } from "../../interfaces/interfaces";

export interface Props {
  forecastWeather: Weather[];
}
export const ForecastWeather = ({ forecastWeather }: Props) => {
  return (
    <ul>
      {forecastWeather.map((weather: Weather, index) => (
        <li key={index.toString()}>
          <span>{weather.main}</span>
          <br />
          <span>{weather.description}</span>
          <br />
          <span>{JSON.stringify(weather.temperature)}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="currentWeather.main"
          />
        </li>
      ))}
    </ul>
  );
};
