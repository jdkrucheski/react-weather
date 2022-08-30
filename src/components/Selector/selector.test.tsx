import { render } from "@testing-library/react";
import untypedLocations from "../../data/locations.json";
import { Location } from "../../interfaces/interfaces";
import { Selector } from "./Selector";
import { getLocationsAdapter } from "../../adapters/locationes";

describe("Tests in location selector component", () => {
  const locations = getLocationsAdapter(untypedLocations);
  const handleSelect = (location: Location) => console.log(location);
  const { getAllByRole, getByText } = render(
    <Selector selected={locations[0]} options={locations} handleSelect={handleSelect} />
  );

  test("should render a selector with all options", () => {
    expect(getAllByRole("option").length).toBe(locations.length);
  });
});
