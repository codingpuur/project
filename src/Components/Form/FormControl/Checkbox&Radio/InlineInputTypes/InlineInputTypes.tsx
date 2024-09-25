import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { InlineInputTypesHeading } from "@/utils/Constant";
import InlineCheckbox from "./InlineCheckbox";
import InlineRadios from "./InlineRadios";
import InlineSwitches from "./InlineSwitches";
import { InlineInputTypesData } from "@/Data/Form/FormControl/FormControlData";

const InlineInputTypes = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={InlineInputTypesHeading} subTitle={InlineInputTypesData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            <InlineCheckbox />
            <InlineRadios />
            <InlineSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineInputTypes;
