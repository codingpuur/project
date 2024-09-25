import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Switchs } from "@/utils/Constant";
import SwitchTable from "./SwitchTable";

const Switch = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Switchs}/>
        <div>
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive">
                <SwitchTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Switch;
