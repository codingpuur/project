import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { IconsWithTabs } from "@/utils/Constant";
import IconNav from "./IconNav";
import IconTabBody from "./IconTabBody";
import CommonHeader from "@/Common/CommonHeader";
import { IconTabsData } from "@/Data/Uikits/Tab/TabData";

const IconTabs = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={IconsWithTabs} subTitle={IconTabsData} headClass="pb-0 card-no-border" />
        <CardBody>
          <IconNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <IconTabBody tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconTabs;
