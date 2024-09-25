import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Inputs } from "@/utils/Constant";
import InputTable from "./InputTable";

const Input = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Inputs}  />
        <div>
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive">
                <InputTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Input;
