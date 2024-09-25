import { Button } from 'reactstrap'
import { productSizeArray } from '@/Data/Apps/Ecommerce/ProductData'
import { ProductDetails } from '@/utils/Constant'
import { useAppSelector } from '@/Redux/Hooks'
import { ModalProductDetailsProp } from '@/TypeCommon/Apps/Ecommerce/ProductType'

const ModalProductDetails:React.FC<ModalProductDetailsProp> = ({ singleProduct }) => {
  const {symbol} = useAppSelector((state)=>state.product)
  return (
    <>
      <h4>{singleProduct.category}</h4>
      <div className="product-price fs-4 mb-1">
        {symbol}{singleProduct.price}
        <del className="f-w-700 fs-5 ms-1">{symbol}{singleProduct.discountPrice}</del>
      </div>
      <div className="product-view product-modal-line">
        <h3 className="f-w-600">{ProductDetails}</h3>
        <p className="mb-0">{singleProduct.discription}</p>
      </div> 
      <div className="product-size mt-3 mb-2">
        <ul className="d-flex flex-row">
          {productSizeArray.map((items, i) => (
            <li key={i} className="me-2">
              <Button outline color="light">
                {items}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ModalProductDetails