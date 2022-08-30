import { Weather } from "../../interfaces/interfaces";
import styles from "./forecastWeather.module.css";

export interface Props {
  forecastWeather: Weather[];
}
export const ForecastWeather = ({ forecastWeather }: Props) => {
  return (
    <div className="container">
      {forecastWeather.map((weather: Weather, index) => (
        <div key={index.toString()} className={styles.item}>
          <div className={styles.thirdContainer}>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.main}
            />
            <span>{weather.description}</span>
            <span>
              {`${Math.trunc(weather.temperature.temp_min)}º / ${Math.trunc(
                weather.temperature.temp_max
              )}º`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
