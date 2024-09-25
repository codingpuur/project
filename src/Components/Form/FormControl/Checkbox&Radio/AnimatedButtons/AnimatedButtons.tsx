import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { AnimatedButtonsHeading } from "@/utils/Constant";
import PaymentMethod from "./PaymentMethod";
import FavoriteSocialMedia from "./FavoriteSocialMedia";
import { AnimatedButtonsData } from "@/Data/Form/FormControl/FormControlData";

const AnimatedButtons = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal animated-custom-buttons">
        <CommonHeader title={AnimatedButtonsHeading} subTitle={AnimatedButtonsData} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <PaymentMethod />
            <FavoriteSocialMedia />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedButtons;
