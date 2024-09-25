import { Button, Col } from "reactstrap";
import { Conference_util, Readmore } from "@/utils/Constant";

const Conference2 = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <div className="vertical-line" />
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-primary txt-primary">
              1 Jan
            </div>
            <h3>{Conference_util}</h3>
            <p className="text-muted">{"A gathering of two or more people to talk about issues of interest."}</p>
            <div>
              <Button color="primary" className="px-3">
                {Readmore}
              </Button>
            </div>
          </div>
        </li>
      </div>
    </Col>
  );
};

export default Conference2;
