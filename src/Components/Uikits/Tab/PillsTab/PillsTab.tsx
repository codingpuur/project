import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Pillstabs } from "@/utils/Constant";
import PillNav from "./PillNav";
import PillContent from "./PillContent";
import CommonHeader from "@/Common/CommonHeader";
import { PillsTabData } from "@/Data/Uikits/Tab/TabData";

const PillsTab = () => {
  const [basicTab, setBasicTab] = useState("3");

  return (
    <Col sm={12} xxl={6}>
      <Card className='height-equal'>
        <CommonHeader title={Pillstabs} subTitle={PillsTabData} headClass='pb-0' />
        <CardBody>
          <PillNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <PillContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsTab;
