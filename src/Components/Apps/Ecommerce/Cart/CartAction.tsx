import { Button, Input, InputGroup } from 'reactstrap';
import { Apply, Checkout, ContinueShopping, TotalPrice } from '@/utils/Constant';
import { getallCardTotal } from '@/Service/Ecommerce.service';
import { useAppSelector } from '@/Redux/Hooks';
import Link from 'next/link';

const CartAction = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  const { symbol } = useAppSelector((state) => state.product);
  return (
    <>
      <tr>
        <td colSpan={4}>
          <InputGroup>
            <Input className="me-2" type="text" placeholder="Enter coupan code" value={""}/>
            <Button as="a" color="primary" className="text-white">{Apply}</Button>
          </InputGroup>
        </td>
        <td className="total-amount">
          <h4 className= "m-0 text-end" >
            <span className="f-w-700">{TotalPrice} :</span>
          </h4>
        </td>
        <td><span>{symbol}{getallCardTotal(cart)}</span></td>
      </tr>
      <tr>
        <td className="text-end" colSpan={5}>
            <Link href={`/ecommerce/product`} className="btn btn-secondary cart-btn-transform">{ContinueShopping}</Link>
        </td>
        <td>
            <Link className="btn btn-success cart-btn-transform" href={`/ecommerce/checkout`}>{Checkout}</Link>
        </td>
      </tr>
    </>
  )
}

export default CartAction