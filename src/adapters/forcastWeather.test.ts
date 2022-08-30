import untypedForecastWeather from "../data/forecastWeather.json";
import { getForecastWeatherAdapter } from "./forecastWeather";

describe("Test CurrentWeather adapter", () => {
  test("should return an object of current weather", () => {
    const forecastWeather = getForecastWeatherAdapter(untypedForecastWeather);
    forecastWeather.map((weather) => {
      expect(typeof weather.main).toBe("string");
      expect(typeof weather.description).toBe("string");
      expect(typeof weather.icon).toBe("string");
      expect(typeof weather.temperature).toBe("object");
    });
  });
});
