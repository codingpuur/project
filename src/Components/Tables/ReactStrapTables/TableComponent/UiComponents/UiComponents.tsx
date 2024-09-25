import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { UIComponents } from "@/utils/Constant";
import UiComponentsTable from "./UiComponentsTable";

const UiComponents = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={UIComponents} />
        <CardBody className="p-0">
          <Row className="card-block">
            <Col sm={12} lg={12} xl={12}>
              <div className="table-responsive theme-scrollbar">
                <UiComponentsTable />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UiComponents;
