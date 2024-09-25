import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { VerticalTabs } from "@/utils/Constant";
import VerticalNav from "./VerticalNav";
import VerticalContent from "./VerticalContent";
import CommonHeader from "@/Common/CommonHeader";
import { VerticalTabData } from "@/Data/Uikits/Tab/TabData";

const VerticalTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col sm={12} xxl={6}>
      <Card className="height-equal custom-vertical-tabs">
        <CommonHeader title={VerticalTabs} subTitle={VerticalTabData} headClass="card-no-border pb-0" />
        <CardBody>
          <Row> 
            <Col md={4} xs={12}>
              <VerticalNav basicTab={basicTab} setBasicTab={setBasicTab} />
            </Col>
            <Col md={8} xs={12}>
              <VerticalContent tabId={basicTab} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalTab;
