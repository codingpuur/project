import { Card, Col, Row } from "reactstrap";
import { Href } from "@/utils/Constant";
import UserProfileIcon from "./UserProfileIcon";
import NavBarMain from "./NavBarMain";
import { NavBarMainProps } from "@/Types/Apps/SocialApp";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import Link from "next/link";

const UserProfile: React.FC<NavBarMainProps> = ({ callback }) => {
  return (
    <Row>
      <Col sm={12} className='box-col-12'>
        <Card className='hovercard text-center'>
          <div className='cardheader socialheader' />
          <div className='user-image'>
            <div className='avatar'>
              <Image width={100} height={100} alt='user' src={`${ImagePath}/user/1.jpg`} />
            </div>
            <div className='icon-wrapper'>
              <Link href={Href}>
                <i className='icofont icofont-pencil-alt-5' />
              </Link>
            </div>
            <UserProfileIcon />
          </div>
          <div className='info market-tabs p-0'>
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
