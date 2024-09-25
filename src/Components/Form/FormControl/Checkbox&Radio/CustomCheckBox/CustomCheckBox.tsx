import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { CustomCheckBoxHeading } from "@/utils/Constant";
import BorderedCheckBox from "./BorderedCheckBox/BorderedCheckBox";
import IconCheckBox from "./IconCheckBox/IconCheckBox";
import FilledCheckBox from "./FilledCheckBox/FilledCheckBox";
import { CustomCheckBoxData } from "@/Data/Form/FormControl/FormControlData";

const CustomCheckBox = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={CustomCheckBoxHeading} subTitle={CustomCheckBoxData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckBox />
            <IconCheckBox />
            <FilledCheckBox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckBox;
