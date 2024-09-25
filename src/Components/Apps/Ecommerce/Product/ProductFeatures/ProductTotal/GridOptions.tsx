import { Href } from '@/utils/Constant';
import { FILTER_PRODUCT_DATA } from '@/Data/Apps/Ecommerce/ProductData';
import { useAppDispatch } from '@/Redux/Hooks';
import { setColView } from '@/Redux/Reducer/FilterSlice';
import Link from 'next/link';

const GridOptions = () => {
  const dispatch = useAppDispatch();
  const LayoutView = (colClass: string) => dispatch(setColView(colClass));
  return (
    <div className="grid-options d-inline-block">
      <ul className="flex-row">
        {FILTER_PRODUCT_DATA.map((data, index) => (
          <li key={index}>
            <Link className={`product-${data.id}-layout-view`} href={Href} onClick={() => LayoutView(data.colClass)}>
              {data.filterData.map((item, number) => (
                <span key={number} className={`line-grid line-grid-${item} bg-primary`}></span>
              ))}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GridOptions