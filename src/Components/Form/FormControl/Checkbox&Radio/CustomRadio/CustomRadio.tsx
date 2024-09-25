import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CustomRadioBoxHeading } from "@/utils/Constant";
import BorderedRadio from "./BorderedRadio";
import IconRadioBox from "./IconRadioBox";
import FilledRadio from "./FilledRadio";
import { CustomRadioData } from "@/Data/Form/FormControl/FormControlData";

const CustomRadio = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={CustomRadioBoxHeading} subTitle={CustomRadioData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            <BorderedRadio />
            <IconRadioBox />
            <FilledRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomRadio;
