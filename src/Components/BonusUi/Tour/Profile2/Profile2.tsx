import { Card, Col, Row } from "reactstrap";
import CommonProfileHead from "../../../../CommonElements/BonusUi/CommonProfileHead";
import { Jan25, hours10ago, min1read } from "../../../../utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import ProfileLike from "../WilliamProfile/ProfileLike";

const Profile2 = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead month={Jan25} time={min1read} activeTime={hours10ago} />
          <hr />
          <p className="block-ellipsis">{"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}</p>
          <Row className="g-3 mt-4 pictures">
            <Col sm={6}>
              <div className="tour-blog">
                <Image
                  className="img-fluid rounded"
                  src={`${ImagePath}/other-images/mountain.jpg`}
                  alt="mountain"
                  height={350}
                  width={685}
                />
              </div>
            </Col>
            <Col sm={6}>
              <div className="tour-blog">
                <Image className="img-fluid rounded" src={`${ImagePath}/other-images/sea.jpg`} alt="sea" height={350} width={685}/>
              </div>
            </Col>
          </Row>
          <ProfileLike />
        </div>
      </Card>
    </Col>
  );
};

export default Profile2;
