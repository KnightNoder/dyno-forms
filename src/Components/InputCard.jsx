import "../css/InputCard.css";
const InputCard = ({
  heading,
  placeholder,
  requiredErrorText,
  value,
  vibrate,
  required,
  onchange,
  inputMode,
  validity,
  inputCheck,
}) => {
  return (
    <>
      <h3 className="input-card-label">
        {heading}
        <div
          style={{
            display: "inline-block",
            fontSize: "20px",
            color: "#EA2C2C",
            marginLeft: "3px",
          }}
          className=""
        >
          {required}
        </div>
      </h3>
      <input
        className="input"
        onChange={(e) => onchange(heading, e.target.value)}
        value={value}
        inputMode={inputMode}
        type="text"
        placeholder={placeholder}
        // onKeyDown={numberCheck}
      />
      <span
        style={!value ? { visibility: "visible" } : { visibility: "hidden" }}
        className="error-text"
        id="two"
      >
        {requiredErrorText}
      </span>
    </>
  );
};

export default InputCard;
