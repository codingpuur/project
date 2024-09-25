import { Card, CardBody } from "reactstrap";
import { Brand } from "@/utils/Constant";

const ProductBrand = () => {
  return (
    <Card>
      <CardBody>
        <div className="filter-block">
          <h3>{Brand}</h3>
          <ul>
            <li className="pt-3">{'Clothing'}</li>
            <li className="pt-3">{'Bags'}</li>
            <li className="pt-3">{'Footwear'}</li>
            <li className="pt-3">{'Watches'}</li>
            <li className="pt-3">{'ACCESSORIES'}</li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductBrand;
