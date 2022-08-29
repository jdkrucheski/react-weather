import untypedLocations from "../data/locations.json";
import { getLocations } from "./locationes";

describe("Test Location adapter", () => {
  test("should return an array of locations that includes Cordoba", () => {
    const locations = getLocations(untypedLocations);
    expect(locations.length).toBe(4);
    expect(locations.filter((location) => location.city === "Córdoba").length).toBe(1);
  });
});
