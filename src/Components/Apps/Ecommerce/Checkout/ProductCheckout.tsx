import { Col } from "reactstrap";
import CheckPayment from "./CheckPayment";
import { PlaceOrder, Products, Subtotal, Total } from "@/utils/Constant";
import { getallCardTotal } from "@/Service/Ecommerce.service";
import CheckoutShipping from "./CheckoutShipping";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";

const ProductCheckout = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  return (
    <Col xl={6} sm={12} className='checkout'>
      <div className='checkout-details'>
        <div className='order-box'>
          <div className='title-box'>
            <div className='checkbox-title'>
              <h3>{Products} </h3>
              <span>{"Total"}</span>
            </div>
          </div>
          <ul className='qty'>
            {cart.map((data) => (
              <li>
                {data.name} × {data.total} <span>${data.price * data.total}</span>
              </li>
            ))}
          </ul>
          <ul className='sub-total'>
            <li>
              {Subtotal} <span className='count'>${getallCardTotal(cart)}</span>
            </li>
            <CheckoutShipping />
          </ul>
          <ul className='sub-total total'>
            <li>
              {Total} <span className='count'>${getallCardTotal(cart)}</span>
            </li>
          </ul>
          <CheckPayment />
          <div className='order-place'>
            <Link className='btn btn-primary' href={`/ecommerce/invoice`}>
              {PlaceOrder}
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCheckout;
