import { Location } from "../interfaces/interfaces";

export const getLocationsAdapter = (untypedLocations: any) => {
  const locations: Location[] = untypedLocations.locations;
  return locations;
};
