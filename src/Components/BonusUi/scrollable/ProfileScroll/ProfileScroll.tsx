import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ProfileScrollable } from "@/utils/Constant";
import Scrollbars from "react-custom-scrollbars-2";
import { ProfileScrollTopData, profileScrollData } from "@/Data/BonusUi/scrollable/scrollableData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ProfileScroll = () => {
  return (
    <Col xxl={4} md={6} className='profile-scroll'>
      <Card>
        <CommonHeader title={ProfileScrollable} subTitle={ProfileScrollTopData} headClass="pb-0"/>
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo scroll-b-none" style={{ width: "100%", height: 300 }} >
            <ListGroup>
              {profileScrollData &&
                profileScrollData.map((item, index) => (
                  <ListGroupItem className="list-group-item-action list-hover-primary" key={index}>
                    <Image className="rounded-circle" src={`${ImagePath}/${item.img}`} alt="user" width={100} height={100}/>
                    {item.text}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileScroll;
