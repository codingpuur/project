import { Card, CardBody, Col } from "reactstrap";
import { Followers, Following, Href, Posts } from "@/utils/Constant";
import { userCardData } from "@/Data/Apps/SocialApp/SocialAppData";
import SVG from "@/utils/CommonSvgIcon/SVG";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const AllCards = () => {
  return (
    <>
      {userCardData.slice(0, 6).map((item) => (
        <Col sm={12} md={6} xl={4} lg={6} className='box-col-4' key={item.id}>
          <Card className='social-profile'>
            <CardBody>
              <div className='social-img-wrap'>
                <div className='social-img'>
                  <Image width={68} height={68} src={`${ImagePath}/${item.avatar}`} alt='user' />
                </div>
                <div className='edit-icon'>
                  <SVG iconId={item.icon} />
                </div>
              </div>
              <div className='social-details'>
                <h5 className='mb-1'>
                  <Link href={Href}>{item.name}</Link>
                </h5>
                <span className='f-light'>{item.email}</span>
                <ul className='social-follow flex-row'>
                  <li>
                    <h3 className='mb-0'>{item.totalPost}</h3>
                    <span className='f-light'>{Posts}</span>
                  </li>
                  <li>
                    <h3 className='mb-0'>{item.follower}</h3>
                    <span className='f-light'>{Followers}</span>
                  </li>
                  <li>
                    <h3 className='mb-0'>{item.following}</h3>
                    <span className='f-light'>{Following}</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default AllCards;
