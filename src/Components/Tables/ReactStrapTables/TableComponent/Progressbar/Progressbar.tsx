import { Card, Col, Row } from "reactstrap";
import ProgressbarTable from "./ProgressbarTable";
import { ProgressBarHeading } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";

const Progressbar = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={ProgressBarHeading} />
        <div>
          <Row className='card-block'>
            <Col sm={12} lg={12} xl={12}>
              <div className='table-responsive'>
                <ProgressbarTable />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default Progressbar;
