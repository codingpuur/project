import { Card, CardBody, Col, Row } from "reactstrap";
import DarkBackground from "./DarkBackground";
import LightBackground from "./LightBackground";
import ExtendedBackground from "./ExtendedBackground";
import { Colordata } from "@/Data/Uikits/HelperClass/HelperClassData";
import CommonHeader from "@/Common/CommonHeader";
import { BackgroundColors } from "@/utils/Constant";

const BackgroundColor = () => {
  
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={BackgroundColors} subTitle={Colordata} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <DarkBackground />
            <LightBackground />
            <ExtendedBackground />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColor;
