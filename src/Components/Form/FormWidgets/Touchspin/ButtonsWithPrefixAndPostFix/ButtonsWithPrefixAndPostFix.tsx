import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ButtonsWithPrefixAndPostFixHeading } from "@/utils/Constant";
import CommonPrefixAndPostFix from "../common/CommonPrefixAndPostFix";
import { ButtonsWithPrefixAndPostFixData } from "@/Data/Form/FormWidgets/TouchSpinData";

const ButtonsWithPrefixAndPostFix = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={ButtonsWithPrefixAndPostFixHeading}
          subTitle={ButtonsWithPrefixAndPostFixData}
          headClass="pb-0"
        />
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostFix preButton differentColor />
          <CommonPrefixAndPostFix PostButton differentColor />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonsWithPrefixAndPostFix;
