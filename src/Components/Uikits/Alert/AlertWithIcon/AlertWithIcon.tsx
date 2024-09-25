import { Card, CardBody, Col } from "reactstrap";
import { AlertsWithIconsandTextActions } from "@/utils/Constant";
import TimeAlert from "./TimeAlert";
import HeartAlert from "./HeartAlert";
import CommonHeader from "@/Common/CommonHeader";
import { AlertWithIconData } from "@/Data/Uikits/Alert/AlertData";

const AlertWithIcon = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="custom-light-alerts">
        <CommonHeader title={AlertsWithIconsandTextActions} subTitle={AlertWithIconData} headClass='pb-0' />
        <CardBody className='dark-txt'>
          <TimeAlert />
          <HeartAlert />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcon;
