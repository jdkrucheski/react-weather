import untypedCurrentWeather from "../data/currentWeather.json";
import { getCurrentWeatherAdapter } from "./currentWeather";

describe("Test CurrentWeather adapter", () => {
  test("should return an object of current weather", () => {
    const currentWeather = getCurrentWeatherAdapter(untypedCurrentWeather);
    expect(typeof currentWeather.main).toBe("string");
    expect(typeof currentWeather.description).toBe("string");
    expect(typeof currentWeather.icon).toBe("string");
    expect(typeof currentWeather.temperature).toBe("object");
  });
});
