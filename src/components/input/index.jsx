import "./style.scss";

const Input = (props) => {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        type={props.type || "text"}
      />
    </div>
  );
};

export default Input;
