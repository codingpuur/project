import { Fragment } from "react";
import { Colors } from "@/utils/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { filterColor } from "@/Redux/Reducer/FilterSlice";
import { getColors } from "@/Service/Ecommerce.service";

const ColorsFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const colors = getColors(productItem);

  const colorHandle = (event: { target: EventTarget }, color: string) => {
    const elems = document.getElementsByClassName("color-selector")[0].getElementsByTagName("li");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove("active");
    }
    (event.target as Element).classList.add("active");
    dispatch(filterColor(color));
  };
  return (
    <div className='product-filter slider-product'>
      <h3 className='f-w-600 mb-2'>{Colors}</h3>
      <div className='color-selector'>
        <ul className='d-flex flex-row gap-1'>
        {colors.map((color, i: number) => (
            <Fragment key={i}>
              <li className={color} title={color} onClick={(e) => colorHandle(e, color)}></li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorsFilter;
