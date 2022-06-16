import "./style.scss";
import { ReactComponent as FaceSVG } from "../../../../assets/images/face.svg";
import { ReactComponent as ArrowSVG } from "../../../../assets/images/arrow.svg";

export default function Panel(props) {
  const clickHandler = () => {
    props.toggleShowPanel().then((isOpen) => {
      if (isOpen) {
        console.log("scroll", props.open);
        document.querySelector("#form-container").scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  };

  return (
    <div className="panel-container">
      <div className="panel-controller">
        <FaceSVG className="face" />
        <h1>Front-end challenge!</h1>
        <p>This is a design that you will need to code up and impress us.</p>
        <button className={props.open ? "toggled" : ""} onClick={clickHandler}>
          <ArrowSVG />
        </button>
      </div>
    </div>
  );
}
