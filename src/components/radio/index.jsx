import "./style.scss";

const RadioGroup = (props) => {
  return (
    <div className="radio-group">
      <label className="radio-group-label" htmlFor={props.name}>
        {props.label}
      </label>
      <div className="radio-buttons">{props.children}</div>
    </div>
  );
};

export const Radio = (props) => {
  return (
    <label className="radio-button">
      <input type="radio" name={props.name} />
      <div className="radio-icon">{props.icon}</div>
      <div className="radio-label">{props.label}</div>
    </label>
  );
};

RadioGroup.Radio = Radio;

export default RadioGroup;
