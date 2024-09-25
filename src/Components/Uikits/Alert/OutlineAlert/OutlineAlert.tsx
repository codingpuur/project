import { Card, CardBody, Col } from "reactstrap";
import { OutlineDarkAndLightAlerts } from "@/utils/Constant";
import LightOutline from "./LightOutline";
import DarkOutline from "./DarkOutline";
import CommonHeader from "@/Common/CommonHeader";
import { OutlineAlertData } from "@/Data/Uikits/Alert/AlertData";

const OutlineAlert = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="custom-light-alerts">
        <CommonHeader title={OutlineDarkAndLightAlerts} subTitle={OutlineAlertData} headClass='pb-0'/>
        <CardBody>
          <LightOutline />
          <DarkOutline />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;
