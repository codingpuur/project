import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ProductItemInterface, ProductModalInterfaceType } from "@/TypeCommon/Apps/Ecommerce/ProductType";
import { useEffect, useState } from "react";
import { Button, Col, Modal, ModalHeader, Row } from "reactstrap";
import ModalButtons from "./ModalButtons";
import ModalProductDetails from "./ModalProductDetails";
import ModalQuantity from "./ModalQuantity";

const ProductModal = ({ value, setOpenModal, dataid }: ProductModalInterfaceType) => {
  const [open, setOpen] = useState(value);
  const { productItem } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState<number>(1);
  const [singleProduct, setSingleProduct] = useState<ProductItemInterface | undefined | [] | any>([]);

  useEffect(() => {
    productItem.forEach((product: ProductItemInterface) => {
      if (product.id === dataid) setSingleProduct(product);
    }); 
  }, [productItem, dataid]);

  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };
  return (
    <Modal centered size='lg' className='product-box' isOpen={open} toggle={onCloseModal}>
      <ModalHeader className="position-relative">
        <Button className='pb-3' close onClick={onCloseModal}></Button>
        <Row className='product-box align-items-center'>
          <Col lg={6} className='product-img'>
            <img className='img-fluid' src={singleProduct.image ? `${ImagePath}/${singleProduct.image}` : ""} alt='' />
          </Col>
          <Col lg={6} className='product-details text-start p-1'>
            <ModalProductDetails singleProduct={singleProduct} />
            <div className='product-qnty'>
              <ModalQuantity quantity={quantity} setQuantity={setQuantity} />
              <ModalButtons singleProduct={singleProduct} quantity={quantity} />
            </div>
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  );
};

export default ProductModal;

 
