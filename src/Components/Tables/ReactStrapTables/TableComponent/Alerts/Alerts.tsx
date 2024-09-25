import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import AlertTable from "./AlertTable";
import { Alert } from "@/utils/Constant";

const Alerts = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Alert} />
        <div>
          <Row className='card-block'>
            <Col sm={12} lg={12} xl={12}>
              <div className='table-responsive'>
                <AlertTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Alerts;
