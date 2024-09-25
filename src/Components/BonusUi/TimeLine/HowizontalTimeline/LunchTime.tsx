import { Button, Col } from "reactstrap";
import { Launch_Theme, Readmore } from "@/utils/Constant";

const LunchTime = () => {
  return (
    <Col xxl={4} className="horizontal-timeline">
      <div>
        <div className="vertical-line" />
        <li className="LIst-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-warning txt-warning">
              7 Dec
            </div>
            <h3>{Launch_Theme}</h3>
            <p className="text-muted">{"Responsive Website is the approach that suggests website design and development should respond."}</p>
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

export default LunchTime;
