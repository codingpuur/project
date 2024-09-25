import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultCheckBoxHeading } from "@/utils/Constant";
import DefaultChecks from "./DefaultChecks";
import DisabledChecks from "./DisabledChecks";
import RightCheck from "./RightCheck";
import Indeterminate from "./Indeterminate";
import { DefaultCheckBoxData } from "@/Data/Form/FormControl/FormControlData";

const DefaultCheckBox = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={DefaultCheckBoxHeading} subTitle={DefaultCheckBoxData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            <DefaultChecks />
            <DisabledChecks />
            <RightCheck />
            <Indeterminate />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultCheckBox;
