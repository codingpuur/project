import { Row, Table } from 'reactstrap';
import { Href } from '@/utils/Constant';
import { XCircle } from 'react-feather';
import CartTableHead from './CartTableHead';
import CartQuantityButton from './CartQuantityButton';
import CartAction from './CartAction';
import EmptyCart from './EmptyCart';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { CartType } from '@/TypeCommon/Apps/Ecommerce/ProductType';
import { removeCartData } from '@/Redux/Reducer/CartSlice';
import Image from 'next/image';
import { ImagePath } from '@/Constant';
import Link from 'next/link';

const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removefromcart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history table-responsive wishlist">
            <Table bordered>
              <CartTableHead />
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                        <Image className="img-fluid img-40" src={`${ImagePath}/${item.image}`} alt={Href} width={40} height={43}/>
                    </td>
                    <td>
                        <div className="product-name">
                            <Link href={Href}>{item.name}</Link>
                        </div>
                    </td>
                    <td>{symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td>
                        <Link href={Href} onClick={() => removefromcart(item)}><XCircle /></Link>
                    </td>
                    <td>{symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction/>
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

export default CartData