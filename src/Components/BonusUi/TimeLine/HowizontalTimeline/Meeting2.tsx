import { Button, Col } from "reactstrap";
import { Meeting_util, Readmore } from "@/utils/Constant";

const Meeting2 = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <div className="vertical-line" />
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-danger txt-danger">
              22 March
            </div>
            <h3>{Meeting_util}</h3>
            <p className="text-muted">{"If several languages coalesce the grammar of the resulting simple and regular social networking platform."}</p>
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

export default Meeting2;
