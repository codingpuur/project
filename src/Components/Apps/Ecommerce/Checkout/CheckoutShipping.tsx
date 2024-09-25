import { Input, Label } from "reactstrap";
import { Shipping } from "@/utils/Constant";

const CheckoutShipping = () => {
  return (
    <li className="shipping-class">
      {Shipping}
      <div className="shopping-checkout-option">
        <Label className="d-block" htmlFor="chk-ani">
          <Input
            className="checkbox_animated"
            id="chk-ani"
            type="checkbox"
            defaultChecked
          />
          {'Option 1'}
        </Label>
        <Label className="d-block" htmlFor="chk-ani1">
          <Input className="checkbox_animated" id="chk-ani1" type="checkbox" value={""} />
          {'Option 2'}
        </Label>
      </div>
    </li>
  );
};

export default CheckoutShipping;
