import untypedLocations from "../data/locations.json";
import { getLocationsAdapter } from "./locationes";

describe("Test Location adapter", () => {
  test("should return an array of locations that includes Cordoba", () => {
    const locations = getLocationsAdapter(untypedLocations);
    expect(locations.length).toBe(4);
    expect(locations.filter((location) => location.city === "Córdoba").length).toBe(1);
  });
});
