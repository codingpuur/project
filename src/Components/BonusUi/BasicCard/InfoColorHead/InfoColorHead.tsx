import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { CionTheme, InfoColorHeader, InfoHeadText, WebDesigner } from "@/utils/Constant";

const InfoColorHead = () => {
  return (
    <Col xl={4}>
      <Card className='height-equal custom-info-color'>
        <CardHeader className='bg-info'> 
          <h3 className='text-white'>{InfoColorHeader}</h3>
        </CardHeader>
        <CardBody>
          <h3 className='pb-2'>{WebDesigner}</h3>
          <p className='mb-0'>{InfoHeadText}</p>
        </CardBody>
        <CardFooter>
          <h3 className='mb-0 text-end'>{CionTheme}</h3>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorHead;
