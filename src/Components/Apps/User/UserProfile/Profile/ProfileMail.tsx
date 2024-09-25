import { Col, Row } from "reactstrap";
import { Email } from "@/utils/Constant";

const ProfileMail = () => {
  return (
    <Col sm={6} xl={4} className="order-sm-1 order-xl-0">
      <Row className="g-3">
        <Col md={6}>
          <div className="ttl-info text-start">
            <h5>
              <i className="fa fa-envelope" />
              &nbsp;&nbsp;&nbsp;{Email}
            </h5>
            <span>{'William@jourrapide.com'}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="ttl-info text-start">
            <h5>
              <i className="fa fa-calendar" />
              &nbsp;&nbsp;&nbsp;{'BOD'}
            </h5>
            <span>{'02 January 1988'}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileMail;
