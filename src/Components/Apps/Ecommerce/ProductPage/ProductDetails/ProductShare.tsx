import { Col, Row } from "reactstrap";
import { ShareIt } from "@/utils/Constant";
import { productSocial } from "@/Data/Apps/Ecommerce/ProductPageData";
import Link from "next/link";

const ProductShare = () => {
  return (
    <Row>
      <Col md={4}>
        <h3 className='product-title'>{ShareIt}</h3>
      </Col>
      <Col md={8}>
        <div className='product-icon'>
          <ul className='product-social simple-list flex-row'>
            {productSocial.map((data, index) => (
              <li className='d-inline-block' key={index}>
                <Link href={data.link} target='_blank'>
                  <i className={`fa fa-${data.iconName}`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default ProductShare;
