import { Card, Col } from "reactstrap";
import { Href } from "@/utils/Constant";
import CommonProfileHead from "../CommonProfileHead/CommonProfileHead";
import ProfileLike from "./ProfileLike";
import Link from "next/link";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const WilliamProfile = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style step5">
          <CommonProfileHead
            activeTime={'3 min ago'}
          />
          <hr />
          <p>{'Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.'}</p>
          <div className="img-container">
            <Link href={Href}>
              <Image
                className="img-fluid rounded"
                src={`${ImagePath}/other-images/profile-style-img3.png`}
                alt="gallery"
                width={1386}
                height={400}
              />
            </Link>
          </div>
          <ProfileLike />
        </div>
      </Card>
    </Col>
  );
};

export default WilliamProfile;
