import { useState } from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { CionProfile, JustifyTabs } from "@/utils/Constant";
import JustifyNav from "./JustifyNav";
import JustifyTabContent from "./JustifyTabContent";
import CommonHeader from "@/Common/CommonHeader";
import { JustifyTabData } from "@/Data/Uikits/Tab/TabData";

const JustifyTab = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={JustifyTabs} subTitle={JustifyTabData} headClass="card-no-border pb-0"/>
        <CardBody>
          <CardHeader className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p>
              <em className="txt-danger">{CionProfile}</em>
            </p>
            <JustifyNav basicTab={basicTab} setBasicTab={setBasicTab} />
          </CardHeader>
          <CardBody className="px-0 pb-0">
            <div className="tab-content">
              <JustifyTabContent tabId={basicTab} />
            </div>
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTab;
