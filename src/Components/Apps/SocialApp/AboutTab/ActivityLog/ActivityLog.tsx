import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import MyActivity from "./MyActivity";
import { ActivityLogHeading } from "@/utils/Constant";

const ActivityLog = () => {
  return (
    <Col sm={12} className='activity-log-main'>
      <Card>
        <CommonHeader title={ActivityLogHeading} headClass='pb-0' />
        <CardBody>
          <div className='activity-log'>
            <MyActivity Heading='Today' />
            <MyActivity Heading='25 December' />
            <MyActivity Heading='8 september' />
            <MyActivity Heading='6 June' />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLog;
