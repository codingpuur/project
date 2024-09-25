import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderTopText, BorderTops } from "@/utils/Constant";
import { BorderTopData } from "@/Data/BonusUi/CreativeCard/CreativeCardData";

const BorderTop = () => {
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderTops} subTitle={BorderTopData} headClass="border-t-danger pb-0"/>
        <CardBody>
          <p className="mb-0">{BorderTopText}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTop;
