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
  numberCheck,
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
        onChange={onchange}
        value={value}
        inputMode={inputMode}
        type="text"
        placeholder={placeholder}
        onKeyDown={numberCheck}
      />
      <span
        style={
          vibrate && !validity
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
        className="error-text"
        id="two"
      >
        {requiredErrorText}
      </span>
    </>
  );
};

export default InputCard;
