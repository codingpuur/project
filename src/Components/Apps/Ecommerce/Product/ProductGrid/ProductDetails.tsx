import { useAppSelector } from "@/Redux/Hooks";
import { STAR_DATA } from "@/Data/Apps/Ecommerce/ProductData";
import { ProductDetailsProp } from "@/TypeCommon/Apps/Ecommerce/ProductType";
import Link from "next/link";

const ProductDetails:React.FC<ProductDetailsProp> = ({ item }) => {
  const { symbol } = useAppSelector((state) => state.product);
  return (
    <div className='product-details'>
      {STAR_DATA}
      <Link href={`/ecommerce/product-page`}>
        <h4>{item.name}</h4>
      </Link>
      <p>{item.note}</p>
      <div className='product-price'>
        {symbol}
        {item.price}{" "}
        <del className='f-w-700'>
          {symbol}
          {item.discountPrice}
        </del>
      </div>
    </div>
  );
};

export default ProductDetails;
