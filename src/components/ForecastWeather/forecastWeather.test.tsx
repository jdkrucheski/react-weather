import { render } from "@testing-library/react";
import { ForecastWeather } from "./ForecastWeather";

import untypedForecastWeather from "../../data/forecastWeather.json";
import { getForecastWeatherAdapter } from "../../adapters/forecastWeather";

describe("Tests in current weather data component", () => {
  test("should render a instance of current weather", () => {
    const forecastWeather = getForecastWeatherAdapter(untypedForecastWeather);

    const { getAllByRole } = render(<ForecastWeather forecastWeather={forecastWeather} />);
    expect(getAllByRole("listitem").length).toBe(forecastWeather.length);
  });
});
