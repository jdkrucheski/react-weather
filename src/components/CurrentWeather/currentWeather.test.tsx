import { render } from "@testing-library/react";
import { CurrentWeather } from "./CurrentWeather";

import untypedCurrentWeather from "../../data/currentWeather.json";
import { getCurrentWeatherAdapter } from "../../adapters/currentWeather";

describe("Tests in current weather data component", () => {
  test("should render a instance of current weather", () => {
    const currentWeather = getCurrentWeatherAdapter(untypedCurrentWeather);

    render(<CurrentWeather currentWeather={currentWeather} />);
  });
});
