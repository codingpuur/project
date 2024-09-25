import { Card, Col, Row } from "reactstrap";
import { Href } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import CommonProfileHead from "@/CommonElements/BonusUi/CommonProfileHead";
import ProfileLike from "../WilliamProfile/ProfileLike";

const DetailImg = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead time="5 min read" activeTime="2 Yours ago" month="02 Feb"/>
          <hr />
          <Row>
            <Col lg={12} xl={4}>
              <div className="step8">
                <Link href={Href}>
                  <Image
                    className="img-fluid rounded"
                    src={`${ImagePath}/other-images/sidebar-bg.jpg`}
                    alt="nature"
                    height={251}
                    width={446}
                  />
                </Link>
              </div>
              <ProfileLike />
            </Col>
            <Col xl={6}>
              <p className="block-ellipsis pt-xl-0 pt-3">{"The wind gives life to the planet. This unobservable, enigmatic energy has the power to revitalize a setting.Its absence can cause the world to become serenely motionless.Its strength is scarcely visible on bare mountain summits, but it becomes obvious in woods and on the water.Winds may be violent and even harmful.When we investigate it carefully Nature is not a destination.Home is here.Garry Snyder In a very real sense, our home, or natural environment, is made up of mountains and valleys, the seas and the sky, the sun and the soil, the trees and the flowers.Growing up in the contemporary, civilized environment, it's simple to start believing"}</p>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default DetailImg;
