import { Button, ButtonGroup, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ButtonHeading, Vertical } from "@/utils/Constant";
import CommonDropDown from "../../CommonButtons/CommonDropDown";

const VerticalBtnGroup = () => {
  return (
    <Col lg={6}>
      <Card className="height-equal" style={{ minHeight: "411px" }}>
        <CommonHeader title={Vertical} />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Button color="primary">{ButtonHeading}</Button>
            <Button color="secondary">{ButtonHeading}</Button>
            <ButtonGroup>
              <CommonDropDown color="success" className="b-r-0 text-white" />
            </ButtonGroup>
            <Button color="info" className="b-r-0">
              {ButtonHeading}
            </Button>
            <Button color="warning" type="button" className="b-r-0">
              {ButtonHeading}
            </Button>
            <CommonDropDown color="danger" className="b-r-0 text-white" />
            <CommonDropDown color="light" className="b-r-0 text-dark" />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalBtnGroup;
