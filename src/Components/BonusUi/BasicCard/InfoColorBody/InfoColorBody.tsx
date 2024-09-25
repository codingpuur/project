import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { CionTheme, InfoBodyText, InfoColorBodys, UXDesigner } from "@/utils/Constant";

const InfoColorBody = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className='height-equal custom-info-color'>
        <CardHeader>
          <h3>{InfoColorBodys}</h3>
        </CardHeader>
        <CardBody className='bg-info text-white'>
          <h3 className='pb-2'>{UXDesigner} </h3>
          <p className='mb-0'>{InfoBodyText}</p>
        </CardBody> 
        <CardFooter>
          <h3 className='mb-0 text-end' >{CionTheme}</h3>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorBody;
