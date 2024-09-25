import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { NewProducts } from "@/utils/Constant";
import NewProductBody from "./NewProductBody";

const NewProduct = () => {
  return (
    <Col xl={3} md={6} className="box-col-3">
      <Card>
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <h3 className="m-0">{NewProducts}</h3>
          </div>
        </CardHeader>
        <CardBody className="pt-0 product-card">
          <NewProductBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewProduct;
