import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";

const Input = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div
          className="item-list"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <div className="item">
            <LocationOnIcon></LocationOnIcon>
            <Typography className="title-location">{`${main_text}, `}</Typography>
            <Typography className="subtitle">{secondary_text}</Typography>
          </div>
        </div>
      );
    });

  return (
    <div ref={ref}>
      <TextField
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Digite o endereço de envio."
        className="input-map"
        style={{ width: 530, color: "black" }}
      />
      {status === "OK" && <div>{renderSuggestions()}</div>}
    </div>
  );
};

export default Input;
