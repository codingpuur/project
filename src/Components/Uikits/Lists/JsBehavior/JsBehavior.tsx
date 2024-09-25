import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { JavaScriptbehavior } from "@/utils/Constant";
import ListComponent from "./ListComponent";
import JsBehaviorTab from "./JsBehaviorTab";
import CommonHeader from "@/Common/CommonHeader";
import { JsBehaviorData } from "@/Data/Uikits/Lists/ListsData";

const JsBehavior = () => {
  const [activeList, setActiveList] = useState<string>("1");
  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonHeader title={JavaScriptbehavior} subTitle={JsBehaviorData} />
        <CardBody>
          <Row>
            <Col sm={4}>
              <ListComponent activeList={activeList} setActiveList={setActiveList}/>
            </Col>
            <Col sm={8}>
              <JsBehaviorTab tabId={activeList} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JsBehavior;
