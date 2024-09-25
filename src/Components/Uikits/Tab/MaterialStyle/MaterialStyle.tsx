import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { MaterialStyleTabs } from "@/utils/Constant";
import NavTabs from "./NavTabs";
import TabContentMaterial from "./TabContentMaterial";
import CommonHeader from "@/Common/CommonHeader";
import { MaterialStyleData } from "@/Data/Uikits/Tab/TabData";

const MaterialStyle = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={MaterialStyleTabs} subTitle={MaterialStyleData} headClass='pb-0' />
        <CardBody>
          <NavTabs basicTab={basicTab} setBasicTab={setBasicTab} />
          <TabContentMaterial tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialStyle;
