import { Location } from "../interfaces/interfaces";

export const getLocationsAdapter = (untypedLocations: any): Location[] => {
  const locations: Location[] = untypedLocations.locations;
  return locations;
};
