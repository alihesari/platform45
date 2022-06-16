import "./style.scss";
import { ReactComponent as Mars } from "../../../../assets/images/mars_symbol.svg";
import { ReactComponent as Venus } from "../../../../assets/images/venus-symbol.svg";
import { ReactComponent as Card } from "../../../../assets/images/card.svg";
import Input from "../../../../components/input";
import RadioGroup from "../../../../components/radio";
import Button from "../../../../components/button";

export default function Form(props) {
  return (
    <div id="form-container">
      <form>
        <Input name="name" label="Name" placeholder="Your name" />
        <RadioGroup label="Gender">
          <RadioGroup.Radio name="gender" label="Male" icon={<Mars />} />
          <RadioGroup.Radio name="gender" label="Female" icon={<Venus />} />
        </RadioGroup>
        <Input
          name="birthday"
          label="Email"
          placeholder="Date of Birth"
          type="date"
        />
        <Input
          name="email"
          label="Email"
          placeholder="example@domain.com"
          type="email"
        />
        <Input name="mobile" label="Mobile" placeholder="+91 98765 43210" />
        <Input
          name="customer_id"
          label="Customer ID"
          placeholder="576802-ERD0348 45"
        />
        <RadioGroup label="Membership">
          <RadioGroup.Radio name="membership" label="Classic" icon={<Card />} />
          <RadioGroup.Radio name="membership" label="Silver" icon={<Card />} />
          <RadioGroup.Radio name="membership" label="Gold" icon={<Card />} />
        </RadioGroup>

        <div className="form-button-group">
          <Button type="reset">Cancel</Button>
          <Button variant="success">Save</Button>
        </div>
      </form>
      <div className={`content-slide ${props.open ? "show" : ""}`}>
        <h1>My world today</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et nets et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.{" "}
          <a href="#link">View all days</a> eu libero sit amet quam egestas
          semper. Aenean ultricies mi vitae est. Maris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
          wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
          fermentum, elit get tincidunt condimentum, eros ipsum rutrum orci,
          sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
          facilisis. Ut felis. Present dapibus, neque id cursus faucibus, tortor
          neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
        </p>
      </div>
    </div>
  );
}
