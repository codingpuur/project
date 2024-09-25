import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Checkboxs } from "@/utils/Constant";
import CheckboxTable from "./CheckboxTable";

const Checkbox = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Checkboxs} />
        <div>
          <Row className='card-block'>
            <Col sm={12} lg={12} xl={12}>
              <div className='table-responsive'>
                <CheckboxTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Checkbox;
