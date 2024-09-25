import { Button, Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Href, SimplePricingCards } from "@/utils/Constant";
import { simpleCardData } from "@/Data/Apps/Ecommerce/PricingData";

const SimplePricingCard = () => {
  return (
    <Card>
      <CommonHeader title={SimplePricingCards} />
      <CardBody className='pricing-content'>
        <Row className='g-sm-4 g-3'>
          {simpleCardData.map((data, index) => (
            <Col xl={3} sm={6} className='xl-50 box-col-6' key={index}>
              <Card className='text-center pricing-simple'>
                <CardBody>
                  <h3>{data.header}</h3>
                  <h1>{data.amount}</h1>
                  <h3 className='mb-0'>{data.title}</h3>
                </CardBody>
                <Button color='primary' size='lg' block href={Href}>
                  {data.btnname}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default SimplePricingCard;
