import { Card, CardBody } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { servicesData } from "@/Data/Apps/Ecommerce/ProductPageData";

const ProductStatus = () => {
  return (
    <Card>
      <CardBody>
        <div className="collection-filter-block">
          <ul className="pro-services">
            {servicesData.map((data,index) => (
              <li key={index}>
                <div className="d-flex">
                  <FeatherIcons iconName={data.icon} />
                  <div className="flex-grow-1">
                    <h5>{data.title} </h5>
                    <p>{data.subtitle}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductStatus;
