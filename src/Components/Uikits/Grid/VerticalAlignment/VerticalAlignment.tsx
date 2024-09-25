import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import VerticalStart from "./VerticalStart";
import VerticalCenter from "./VerticalCenter";
import VerticalEnd from "./VerticalEnd";
import FooterTable from "./FooterTable";
import { VerticalAlignments } from "@/utils/Constant";
import { VerticalAlignmentData } from "@/Data/Uikits/Grid/GridData";
import CommonHeader from "@/Common/CommonHeader";

const VerticalAlignment = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={VerticalAlignments} subTitle={VerticalAlignmentData} headClass='pb-0'/>
        <CardBody className="grid-showcase mb-0">
          <Row>
            <VerticalStart />
            <VerticalCenter />
            <VerticalEnd />
          </Row>
        </CardBody>
        <CardFooter>
          <FooterTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default VerticalAlignment;
