import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { TooltipTrigger } from "@/utils/Constant";
import TooltipTriggersBody from "./TooltipTriggersBody";

const TooltipTriggers = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={TooltipTrigger} />
        <div>
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive">
                <TooltipTriggersBody />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default TooltipTriggers;
