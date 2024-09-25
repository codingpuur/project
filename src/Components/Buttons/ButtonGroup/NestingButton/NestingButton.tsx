import { Card, CardBody, Col } from "reactstrap";
import { Nesting, NestingButtonSpan } from "@/utils/Constant";
import NormalButtonGroups from "./NormalButtonGroups";
import ButtonGroups from "./ButtonGroups";
import LargeButtonGroups from "./LargeButtonGroups";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";

const NestingButton = () => {
  return (
    <Col lg={6}>
      <Card className="height-equal" style={{ minHeight: "411px" }}>
        <CommonCardHeading smallHeading={Nesting} span={NestingButtonSpan} />
        <CardBody className="btn-group-wrapper">
          <NormalButtonGroups />
          <ButtonGroups />
          <LargeButtonGroups />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingButton;
