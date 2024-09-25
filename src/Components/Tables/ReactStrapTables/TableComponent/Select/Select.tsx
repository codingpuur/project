import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Selects } from "@/utils/Constant";
import SelectTable from "./SelectTable";

const Select = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Selects} />
        <div slot="content">
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive">
                <SelectTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Select;
