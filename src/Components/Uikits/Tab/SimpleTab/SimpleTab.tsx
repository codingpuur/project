import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Simpletabs } from "@/utils/Constant";
import SimpleNav from "./SimpleNav";
import SimpleTabContent from "./SimpleTabContent";
import CommonHeader from "@/Common/CommonHeader";
import { SimpleTabData } from "@/Data/Uikits/Tab/TabData";

const SimpleTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={Simpletabs} subTitle={SimpleTabData} headClass="pb-0" />
        <CardBody>
          <SimpleNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <SimpleTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTab;
