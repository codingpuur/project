import { ImagePath } from "@/Constant";
import { UserPropstype } from "@/Types/Apps/UserProfile";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const CommonProfileHead:React.FC<UserPropstype> = ({ activeTime }) => {
  return (
    <Row className="g-2 align-items-center">
      <Col sm={8}>
        <div className="d-flex">
          <Image
            className="img-thumbnail rounded-circle me-3"
            src={`${ImagePath}/user/7.jpg`}
            alt="Generic placeholder image"
            width={86}
            height={86}
          />
          <div className="flex-grow-1 align-self-center">
            <h5 className="mt-0 user-name">{'JOHAN DIO'}</h5>
          </div>
        </div>
      </Col>
      <Col sm={4} className="text-end">
        <small>{activeTime}</small>
      </Col>
    </Row>
  );
};

export default CommonProfileHead;
