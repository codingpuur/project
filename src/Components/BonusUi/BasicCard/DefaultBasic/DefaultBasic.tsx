import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicCardText, BasicCards } from "@/utils/Constant";

const DefaultBasic = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={BasicCards} subTitle={[{ text: "This is a simple basic card using anywhere." }]} headClass='pb-0' />
        <CardBody>
          <p className='mb-0'>{BasicCardText}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultBasic;
