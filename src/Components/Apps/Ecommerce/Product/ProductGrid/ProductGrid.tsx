import { useState } from 'react'
import { Card, Row } from 'reactstrap';
import HoverButtons from './HoverButtons';
import ProductDetails from './ProductDetails';
import ProductModal from './ProductModal';
import { getVisibleproducts } from '@/Service/Ecommerce.service';
import { useAppSelector } from '@/Redux/Hooks';
import { ProductItemInterface } from '@/TypeCommon/Apps/Ecommerce/ProductType';
import { ImagePath } from '@/Constant';
import RatioImage from '@/CommonElements/RatioImage';

const ProductGrid = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { listView, colClass } = useAppSelector((state) => state.filterData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataid, setDataid] = useState<undefined | number>();
  const { filter } = useAppSelector((state) => state.filterData);
  const products = getVisibleproducts(productItem, filter);
  return (
    <div className={`product-wrapper-grid ${listView ? "list-view" : ""}`}>
      <Row className="gridRow">
        {products &&
          products.map((item: ProductItemInterface, index: number) => {
            return (
              <div id="gridId" className={`${colClass} ${listView ? "col-xl-12" : ""}`} key={index}>
                <Card>
                  <div className="product-box">
                    <div className="product-img">
                      {item.status !== "none" && <div className={`ribbon-index ${item.ribbonClassName}`}>{item.status}</div>}
                      <RatioImage className="img-fluid" src={`${ImagePath}/${item.image}`} alt=""/>
                      <HoverButtons setDataid={setDataid} setOpenModal={setOpenModal} item={item} />
                    </div>
                    <ProductDetails item={item} />
                  </div>
                </Card>
              </div>
            );
          })}
        {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
      </Row>
    </div>
  )
}

export default ProductGrid