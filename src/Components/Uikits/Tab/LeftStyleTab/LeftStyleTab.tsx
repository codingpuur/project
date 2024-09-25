import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { MaterialStyleLeftTabs } from "@/utils/Constant";
import MaterialTab from "./MaterialTab";
import MaterialBody from "./MaterialBody";
import CommonHeader from "@/Common/CommonHeader";
import { LeftStyleTabData } from "@/Data/Uikits/Tab/TabData";

const LeftStyleTab = () => {
  const [basicTab, setBasicTab] = useState("1");
 
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={MaterialStyleLeftTabs} subTitle={LeftStyleTabData} />
        <CardBody>
          <div className="tabs-responsive-side">
            <div className="material-wrapper">
              <MaterialTab basicTab={basicTab} setBasicTab={setBasicTab} />
              <div className="material-content">
                <MaterialBody tabId={basicTab} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftStyleTab;
