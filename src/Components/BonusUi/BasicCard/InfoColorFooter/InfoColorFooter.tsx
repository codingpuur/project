import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { CionTheme, FooterInfotext, InfoFooter, WebDeveloper } from "@/utils/Constant";

const InfoColorFooter = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className='height-equal'>
        <CardHeader>
          <h3>{InfoFooter}</h3>
        </CardHeader>
        <CardBody> 
          <h3 className='pb-2'>{WebDeveloper}</h3>
          <p className='mb-0'>{FooterInfotext}</p>
        </CardBody>
        <CardFooter className='bg-info'>
          <h3 className='mb-0 text-end'>{CionTheme}</h3>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorFooter;
