import { Card, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import RadioButtonsTable from "./RadioButtonsTable";
import { RadioButton } from "@/utils/Constant";

const RadioButtons = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={RadioButton} />
        <div>
          <Row className='card-block'>
            <Col sm={12} lg={12} xl={12}>
              <div className='table-responsive'>
                <RadioButtonsTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default RadioButtons;
