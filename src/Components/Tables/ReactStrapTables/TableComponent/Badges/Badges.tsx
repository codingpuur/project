import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BadgeTitle } from "@/utils/Constant";
import BadgesTable from "./BadgesTable";

const Badges = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonHeader title={BadgeTitle} />
        <div>
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <div className="table-responsive">
                <BadgesTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Badges;
