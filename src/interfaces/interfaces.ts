export interface Location {
  id: string;
  country: string;
  city: string;
}

export interface Temperature {
  temp: number;
  temp_min: number;
  temp_max: number;
}

export interface CurrentWeather {
  main: string;
  description: string;
  icon: string;
  temperature: Temperature;
}
