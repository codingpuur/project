import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CustomSwitchHeading } from "@/utils/Constant";
import CommonCustomSwitch from "./CommonCustomSwitch";
import { CustomSwitchData } from "@/Data/Form/FormWidgets/SwitchData";

const CustomSwitch = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={CustomSwitchHeading} subTitle={CustomSwitchData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            <CommonCustomSwitch />
            <CommonCustomSwitch cardWrapperClassName='radius-none' formCheckSizeClassName='default-square' />
            <CommonCustomSwitch cardWrapperClassName='common-flex' disabled />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomSwitch;
