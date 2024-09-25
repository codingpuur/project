import { Card, CardBody, CardFooter, Col } from "reactstrap";
import HorizontalStart from "./HorizontalStart";
import HorizontalCenter from "./HorizontalCenter";
import HorizontalEnd from "./HorizontalEnd";
import HorizontalTable from "./HorizontalTable";
import CommonHeader from "@/Common/CommonHeader";
import { HorizontalAlignmentData } from "@/Data/Uikits/Grid/GridData";
import { HorizontalAlignments } from "@/utils/Constant";

const HorizontalAlignment = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={HorizontalAlignments} subTitle={HorizontalAlignmentData} headClass='pb-0'/>
        <CardBody className="grid-showcase grid-align">
          <HorizontalStart />
          <HorizontalCenter />
          <HorizontalEnd />
        </CardBody>
        <CardFooter>
          <HorizontalTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default HorizontalAlignment;
