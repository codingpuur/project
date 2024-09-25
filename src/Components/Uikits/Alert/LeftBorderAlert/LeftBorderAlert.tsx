import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { LeftBorderAlerts } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { LeftBorderAlertData } from "@/Data/Uikits/Alert/AlertData";

const LeftBorderAlert = () => {
  const [active, setActive] = useState(true);

  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={LeftBorderAlerts} subTitle={LeftBorderAlertData} headClass='pb-0' />
        <CardBody className='live-dark'>
          <Alert
            className={`alert-light-dark light alert-dismissible fade text-dark border-left-wrapper`}
            color=''
            isOpen={active}
            toggle={() => {setActive(false)}}
          >
            <FeatherIcons iconName='HelpCircle' />
            <p>{"You can check in on some of those fields below."}</p>
            
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftBorderAlert;
