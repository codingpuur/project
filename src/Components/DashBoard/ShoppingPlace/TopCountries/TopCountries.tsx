import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TopCountrie } from "@/utils/Constant";
import TopCountriesBody from "./TopCountriesBody";

const TopCountries = () => {
  return (
    <Col xxl={3} xl={4} md={6} className="box-col-4">
      <Card className="use-country">
        <CardHeader>
          <h3 className="m-0">{TopCountrie}</h3>
        </CardHeader>
        <CardBody className="mt-0 state">
          <TopCountriesBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopCountries;
