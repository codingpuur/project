import { Carts } from "@/utils/Constant";
import SVG from "@/utils/CommonSvgIcon/SVG";
import CartBox from "./CartBox";

const Cart = () => {
  return (
    <li className="cart-nav onhover-dropdown">
      <div className="cart-box">
        <SVG iconId='Buy'/>
      </div>
      <div className="cart-dropdown onhover-show-div">
        <h6 className="f-18 mb-0 dropdown-title">{Carts}</h6>
        <CartBox />
      </div>
    </li>
  );
};

export default Cart;
