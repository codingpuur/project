import { Categorys, NewProducts, Price } from "@/utils/Constant";
import BrandFilter from "./BrandFilter";
import ColorsFilter from "./ColorsFilter";
import GenderFilter from "./GenderFilter";
import Rangeslider from "./Rangeslider";

const Category = () => {
  return (
    <>
      <div className='product-filter'>
        <h3 className='f-w-600 mb-2'>{Categorys}</h3>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className='product-filter pb-0'>
        <h3 className='f-w-600 mb-2'>{Price}</h3>
        <Rangeslider />
        <h3 className='f-w-600 mb-2 mt-5'>{NewProducts}</h3>
      </div>
    </>
  );
};

export default Category;
