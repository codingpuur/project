import { Card, Col } from "reactstrap";
import { Href, Jan25, Minread6, ProfileHead2, min3ago } from "@/utils/Constant";
import CommonProfileHead from "@/CommonElements/BonusUi/CommonProfileHead";
import ProfileLike from "./ProfileLike";
import Link from "next/link";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const WilliamProfile = () => {
  return (
    <Col sm={12}>
      <Card>
        <div className="profile-img-style step5">
          <CommonProfileHead month={Jan25} time={Minread6} activeTime={min3ago} />
          <hr />
          <h3 className="pb-3">{ProfileHead2}</h3>
          <p className="block-ellipsis">English Romantic painter, printer, and watercolourist{" "}
            <em className="txt-danger">William C. Jennings</em>{" "}
            {"Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far larger enemy troops!" }
          </p>
          <div className="img-container">
            <Link href="/ui-kits/tour">
              <Image className="img-fluid rounded" src={`${ImagePath}/other-images/profile-style-img3.png`} alt="gallery" height={400} width={1386}/>
            </Link>
            <p className="block-ellipsis pt-3">"The curved canvas is enclosed in a complex frame that the artist created but that his buddy Gottlieb Christian Kuhn carved. A variety of Christian symbols are depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn, and God's eye.Many of the Romantic elements and subjects that he would explore throughout his career are present in this work, one of his earliest, most notable of which is the landscape's significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis is"<Link className="txt-danger" href={Href} target="_blank"> {" "}Read More</Link>
            </p>
          </div>
          <ProfileLike />
        </div>
      </Card>
    </Col>
  );
};

export default WilliamProfile;
