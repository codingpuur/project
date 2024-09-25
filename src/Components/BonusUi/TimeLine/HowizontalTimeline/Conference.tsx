import { Button, Col } from "reactstrap";
import { Conference_util, Readmore } from "@/utils/Constant";

const Conference = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <li className="event-list">
          <div className="px-4">
            <div className="event-date alert-light-primary txt-primary">
              1 Jan
            </div>
            <h3>{Conference_util}</h3>
            <p className="text-muted">{"Conferences are intended to bring individuals with similar interests together to discuss problems."}</p>
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

export default Conference;
