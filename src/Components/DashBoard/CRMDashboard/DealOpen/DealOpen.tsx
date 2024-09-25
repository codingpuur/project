import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import Customer from "./Customer/Customer";
import { DealOpens } from "@/utils/Constant";
import DealOpenBody from "./DealOpenBody";

const DealOpen = () => {
  return (
    <>
      <Col xl={5}>
        <Row>
          <Col xl={12} lg={6}>
            <Card className='deal-open'>
              <CardHeader className='pb-0'>
                <div className='header-top'>
                  <h3 className='m-0'>{DealOpens}</h3>
                </div>
              </CardHeader>
              <CardBody>
                <DealOpenBody />
              </CardBody>
            </Card>
          </Col>
          <Customer />
        </Row>
      </Col>
    </>
  );
};

export default DealOpen;
