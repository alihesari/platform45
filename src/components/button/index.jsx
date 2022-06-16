import "./style.scss";

const Button = (props) => {
  return (
    <button className={`button ${props.variant}`} type={props.type || "button"}>
      {props.children}
    </button>
  );
};

export default Button;
