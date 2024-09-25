import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TopSellingProducts } from "@/utils/Constant";
import TopSellingProductBody from "./TopSellingProductBody";

const TopSellingProduct = () => {
  return (
    <Col md={12} sm={12}>
      <Card className="selling-product">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h3 className="m-0">{TopSellingProducts}</h3>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <TopSellingProductBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProduct;
