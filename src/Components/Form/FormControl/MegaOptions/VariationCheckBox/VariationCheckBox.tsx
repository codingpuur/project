import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VariationCheckBoxHeading } from "@/utils/Constant";
import EnjoyActivities from "./EnjoyActivities";
import SelectRequirements from "./SelectRequirements";
import { VariationCheckBoxData } from "@/Data/Form/FormControl/FormControlData";

const VariationCheckBox = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={VariationCheckBoxHeading} subTitle={VariationCheckBoxData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            <EnjoyActivities />
            <SelectRequirements />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationCheckBox;
