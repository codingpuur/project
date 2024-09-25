import { useState } from "react";
import { Alert, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { DismissingLightAlerts } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { DismissingLightData } from "@/Data/Uikits/Alert/AlertData";

const DismissingLight = () => {
  const [active, setActive] = useState(true);
  return (
    <Col sm={12} xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={DismissingLightAlerts} subTitle={DismissingLightData} headClass='pb-0' />
        <CardBody>
          <Alert
            color='warning'
            className={`alert-dismissible fade`}
            isOpen={active}
            toggle={() => {setActive(false)}}
          >
            <FeatherIcons iconName='Bell' />
            <p>{"Hidden content You should check in on some of those fields below."}</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLight;
