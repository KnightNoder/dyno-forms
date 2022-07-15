import "../css/ChoiceCard.css";
import Radio from "@mui/material/Radio";
// import Radio from '@material-ui/core/Radio';

const CustomRadio = ({ name, options, setFormValue }) => {
  console.log(options, "data");
  const ImageStyle = {
    display: "block",
  };

  const NoImageStyle = {
    display: "none",
  };

  return (
    <>
      {options.map((datum) => {
        return (
          <>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value={datum.value}
              onClick={() => setFormValue(name, datum.value)}
            />
            {datum.displayText}
          </>
        );
      })}
    </>
  );
};

export default CustomRadio;
