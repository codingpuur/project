import { Button, Col } from "reactstrap";
import { Meet_up, Readmore } from "@/utils/Constant";

const MeetUp = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <li className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-success txt-success">
              4 Feb
            </div>
            <h3>{Meet_up}</h3>
            <p className="text-muted">{ "You may connect with males from all around the world using the friend-forward."}</p>
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

export default MeetUp;
