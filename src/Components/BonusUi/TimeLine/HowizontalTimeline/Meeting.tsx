import { Button, Col } from "reactstrap";
import { Meeting_util, Readmore } from "@/utils/Constant";

const Meeting = () => {
  return (
    <Col xxl={4} className="horizontal-timeline">
      <div>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-danger txt-danger">
              22 March
            </div>
            <h3>{Meeting_util}</h3>
            <p className="text-muted">{"If several languages coalesce the grammar of the resulting simple and regular social networking platform."}</p>
            <div className="read-more-btn">
              <Button color="primary" className="px-3">
                {Readmore}
              </Button>
            </div>
          </div>
        </li>
        <div className="vertical-line" />
      </div>
    </Col>
  );
};

export default Meeting;
