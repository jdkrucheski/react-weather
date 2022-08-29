import { Location } from "../../interfaces/interfaces";

export interface Props {
  options: Location[];
  selected: Location;
  handleSelect: (selectedLocation: Location) => void;
}

export const Selector = ({ options, selected, handleSelect }: Props) => {
  const handleChange = (event: any) => {
    event.preventDefault();
    const selected = options.find((location) => location.id === event.target.value);
    selected && handleSelect(selected);
  };

  return (
    <label>
      Seleccione una ciudad:
      <select value={selected?.id} onChange={handleChange}>
        {options.map((location) => (
          <option key={location.id} value={location.id}>
            {`${location.city} - ${location.country}`}
          </option>
        ))}
      </select>
    </label>
  );
};
