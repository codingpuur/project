import CartQuantityButton from "@/Components/Apps/Ecommerce/Cart/CartQuantityButton";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeCartData } from "@/Redux/Reducer/CartSlice";
import { CartType } from "@/TypeCommon/Apps/Ecommerce/ProductType";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Col } from "reactstrap";
import FeatherIcons from "../../../utils/CommonSvgIcon/FeatherIcons";
import { Checkout, GoToYourCart, Href, OrderTotal } from "../../../utils/Constant";
import { getallCardTotal } from "@/Service/Ecommerce.service";

const CartBox = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removefromcart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <ul>
      {cart.length > 0 ? (
        <Fragment>
          {cart.map((data, index) => (
            <Fragment>
              <li key={index}>
                <div className='d-flex'>
                  <Image className='img-fluid b-r-5 img-60' src={`${ImagePath}/${data.image}`} alt='' height={60} width={60} />
                  <div className='flex-grow-1'>
                    <span>{data.name}</span>
                    <div className='qty-box'>
                      <CartQuantityButton item={data} />
                    </div>
                    <h6 className='font-primary'>${data.price}</h6>
                  </div>
                  <div className='close-circle' onClick={() => removefromcart(data)}>
                    <Link className='bg-danger' href={Href}>
                      <FeatherIcons iconName='X' />
                    </Link>
                  </div>
                </div>
              </li>
            </Fragment>
          ))}
          <li className='total'>
            <h6 className='mb-0'>
              {OrderTotal} :{" "}
              <span className='f-right'>
                {symbol}
                {getallCardTotal(cart)}
              </span>
            </h6>
          </li>
          <li className='text-center'>
            <Link className='d-block mb-3 view-cart f-w-700' href={`/ecommerce/cart`}>
              {GoToYourCart}
            </Link>
            <Link className='btn btn-primary view-checkout' href={`/ecommerce/checkout`}>
              {Checkout}
            </Link>
          </li>
        </Fragment>
      ) : (
        <Col sm={12} className='empty-cart-cls text-center'>
          <Image height={172} width={172} src={`${ImagePath}/ecommerce/icon-empty-cart.png`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
          <h3>
            <strong>Your Cart is Empty</strong>
          </h3>
          <h4>Add something to make me happy</h4>
          <Link className='btn btn-primary cart-btn-transform m-t-15 mb-4' href='/ecommerce/product'>
            continue shopping
          </Link>
        </Col>
      )}
    </ul>
  );
};

export default CartBox;
