import { Card, Col, Row } from "reactstrap";
import CommonProfileHead from "../CommonProfileHead/CommonProfileHead";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import ProfileLike from "../WilliamProfile/ProfileLike";

const Profile2 = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className='profile-img-style'>
          <CommonProfileHead activeTime={"10 Hours ago"} />
          <hr />
          <p className='block-ellipsis'>{"Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable."}</p>
          <Row className='g-3 mt-4 pictures'>
            <Col sm={6}>
              <div className='tour-blog'>
                <Image className='img-fluid rounded' src={`${ImagePath}/other-images/mountain.jpg`} alt='mountain' width={685} height={350} />
              </div>
            </Col>
            <Col sm={6}>
              <div className='tour-blog'>
                <Image className='img-fluid rounded' src={`${ImagePath}/other-images/sea.jpg`} alt='sea' width={685} height={350}/>
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
