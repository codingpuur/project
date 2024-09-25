import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderBottomText, BorderBottoms } from "@/utils/Constant";
import { BorderBottomData } from "@/Data/BonusUi/CreativeCard/CreativeCardData";

const BorderBottom = () => {
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderBottoms} subTitle={BorderBottomData} headClass="border-b-info" />
        <CardBody>
          <p className="mb-0">{BorderBottomText}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;
