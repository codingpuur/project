import { Card, CardBody, Col, Row } from "reactstrap";
import CustomBorder from "./CustomBorder";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import TextColor from "./TextColor";
import { BorderStyleData } from "@/Data/Uikits/HelperClass/HelperClassData";
import CommonHeader from "@/Common/CommonHeader";
import { StylesInBorders } from "@/utils/Constant";

const BorderStyle = () => {
  
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={StylesInBorders} subTitle={BorderStyleData} headClass='pb-0' />
        <CardBody>
          <Row className="g-3">
            <CustomBorder />
            <BorderColor />
            <BorderWidth />
            <TextColor />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderStyle;
