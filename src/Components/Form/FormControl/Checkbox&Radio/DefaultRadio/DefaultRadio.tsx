import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultRadioHeading } from "@/utils/Constant";
import CustomRadios from "./CustomRadios";
import DisabledRadios from "./DisabledRadios";
import RightRadios from "./RightRadios";
import { DefaultRadioData } from "@/Data/Form/FormControl/FormControlData";

const DefaultRadio = () => {
  
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={DefaultRadioHeading} subTitle={DefaultRadioData} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <CustomRadios />
            <DisabledRadios />
            <RightRadios />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRadio;
