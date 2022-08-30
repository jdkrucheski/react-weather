import { Weather } from "../../interfaces/interfaces";
import styles from "./currentWeather.module.css";

export interface Props {
  currentWeather: Weather;
}

export const CurrentWeather = ({ currentWeather }: Props) => {
  return (
    <div className="container">
      <div className={styles.secondContainer}>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          alt={currentWeather.main}
        />
      </div>
      <div className={styles.secondContainer}>
        <span className={styles.currentTemp}>
          {Math.trunc(currentWeather.temperature.temp)}º
        </span>
        <span>{currentWeather.location}</span>
        <span>
          {`${Math.trunc(currentWeather.temperature.temp_min)}º / ${Math.trunc(
            currentWeather.temperature.temp_max
          )}º Sensación Térmica ${Math.trunc(currentWeather.temperature.feels_like)}º`}
        </span>
      </div>
    </div>
  );
};
