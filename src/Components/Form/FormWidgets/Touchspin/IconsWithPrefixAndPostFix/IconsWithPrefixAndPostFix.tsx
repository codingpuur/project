import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { IconsWithPrefixAndPostFixHeading } from "@/utils/Constant";
import CommonPrefixAndPostFix from "../common/CommonPrefixAndPostFix";
import { IconsWithPrefixAndPostFixData } from "@/Data/Form/FormWidgets/TouchSpinData";

const IconsWithPrefixAndPostFix = () => {
  
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={IconsWithPrefixAndPostFixHeading}
          subTitle={IconsWithPrefixAndPostFixData}
          headClass="pb-0"
        />
        <CardBody className="common-flex pre-post-touchspin">
          <CommonPrefixAndPostFix postIcon />
          <CommonPrefixAndPostFix preIcon />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithPrefixAndPostFix;
