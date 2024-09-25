import { Card, CardBody, Col } from "reactstrap";
import ColoredHeadingsBody from "./ColoredHeadingsBody";
import { ColoredHeading } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { ColorHeading } from "@/Data/Uikits/Typography/TypographyData";

const ColoredHeadings = () => {
 
  return (
    <Col xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={ColoredHeading} subTitle={ColorHeading} headClass='pb-0' />
        <CardBody>
          <ColoredHeadingsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredHeadings;
