import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BorderTab } from "@/utils/Constant";
import BorderNav from "./BorderNav/BorderNav";
import TabComponent from "./TabComponent";
import CommonHeader from "@/Common/CommonHeader";
import { BorderTabsData } from "@/Data/Uikits/Tab/TabData";

const BorderTabs = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={BorderTab} subTitle={BorderTabsData} headClass="pb-0"/>
        <CardBody>
          <BorderNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <TabComponent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTabs;
