import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import FollowersGrowth from "./FollowersGrowth/FollowersGrowth";
import { TotalUser } from "@/utils/Constant";
import CardHeaderDropDown from "@/Common/CardHeaderDropDown";
import TotalUsersBody from "./TotalUsersBody";

const TotalUsers = () => {
  return (
    <Col xxl={4} xl={5} md={6} className="box-col-6">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className="card-no-border pb-0">
              <div className="header-top">
                <h3>{TotalUser}</h3>
                <CardHeaderDropDown
                  fItem="Weekly"
                  sItem="Monthly"
                  tItem="Yearly"
                  mainTitle={true}
                />
              </div>
            </CardHeader>
            <CardBody className="py-lg-3">
              <TotalUsersBody />
            </CardBody>
          </Card>
        </Col>
        <FollowersGrowth />
      </Row>
    </Col>
  );
};

export default TotalUsers;
