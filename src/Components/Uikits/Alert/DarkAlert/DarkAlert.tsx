import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { DismissingDarkAlerts } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { DarkAlertData } from "@/Data/Uikits/Alert/AlertData";

const DarkAlert = () => {
  const [active, setActive] = useState(true);
  return (
    <Col sm={12} xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={DismissingDarkAlerts} subTitle={DarkAlertData} headClass='pb-0' />
        <CardBody>
          <Alert color='secondary' className={`dark alert-dismissible fade`} isOpen={active} toggle={() => setActive(!active)}>
            <FeatherIcons iconName='Heart' />
            <p>{"Check your update! You should check in on some of those fields below."}</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkAlert;
