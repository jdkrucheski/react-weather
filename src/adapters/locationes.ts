import { Locations } from "../interfaces/interfaces";

export const getLocations = (untypedLocations: any) => {
  const locations: Locations[] = untypedLocations.locations;
  return locations;
};
