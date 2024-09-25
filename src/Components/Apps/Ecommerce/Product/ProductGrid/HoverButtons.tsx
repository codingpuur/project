import { useAppDispatch } from "@/Redux/Hooks";
import { Href } from "@/utils/Constant";
import { HoverButtonsProp, ProductItemInterface } from "@/TypeCommon/Apps/Ecommerce/ProductType";
import Link from "next/link";
import { addToCartData } from "@/Redux/Reducer/CartSlice";
import { useRouter } from "next/navigation";

const HoverButtons: React.FC<HoverButtonsProp> = ({ item, setDataid, setOpenModal }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();


  const AddToCarts = (item: ProductItemInterface, quantity: number) => {
    dispatch(addToCartData({ item, quantity }));
    router.push("/ecommerce/cart");

  };

  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataid(i.id);
  };
  return (
    <div className='product-hover'>
      <ul className='simple-list d-flex flex-row'>
        <li>
          <Link onClick={() => AddToCarts(item, 1)} href={`/ecommerce/cart`}>
            <i className='icon-shopping-cart ms-1'></i>
          </Link>
        </li>
        <li>
          <Link onClick={() => onClickHandle(item)} href={Href}>
            <i className='icon-eye'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HoverButtons;
