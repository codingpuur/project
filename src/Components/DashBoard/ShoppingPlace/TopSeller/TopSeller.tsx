import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { TopSellers } from "@/utils/Constant";
import TopSellerBody from "./TopSellerBody";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";

const TopSeller = () => {
  return (
    <Col xl={3} md={6} lg={6} className="box-col-3">
      <Row>
        <Col md={12} sm={12}>
          <Card className="top-seller">
            <CardHeader className="card-no-border">
              <div className="header-top">
                <h3 className="m-0">{TopSellers}</h3>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <TopSellerBody />
            </CardBody>
          </Card>
        </Col>
        <TopSellingProduct />
      </Row>
    </Col>
  );
};

export default TopSeller;
