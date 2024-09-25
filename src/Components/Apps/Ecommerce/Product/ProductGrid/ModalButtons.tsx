import { ModalButtonsProp, ProductItemInterface } from '@/TypeCommon/Apps/Ecommerce/ProductType';
import { AddToCartity, ViewDetails } from '@/utils/Constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addToCartData } from '@/Redux/Reducer/CartSlice';

const ModalButtons:React.FC<ModalButtonsProp> = ({ singleProduct, quantity }) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    navigate.push(`/ECommerce/Cart`);
  };
  return (
    <div className="addcart-btn">
      <Link href={`/ecommerce/cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartity}
      </Link>
      <Link href={`/ecommerce/product-page/${singleProduct.id}`} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  )
}

export default ModalButtons