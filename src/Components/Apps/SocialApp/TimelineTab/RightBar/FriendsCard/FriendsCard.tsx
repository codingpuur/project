import { useState } from "react";
import { Card, CardBody, Col, Collapse } from "reactstrap";
import { friendsImageName } from "@/Data/Apps/SocialApp/SocialAppData";
import { Friends } from "@/utils/Constant";
import HeaderWithIcon from "@/CommonElements/HeaderWithIcon";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12} className='xl-50 box-col-12'>
      <Card>
        <HeaderWithIcon Heading={Friends} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className='avatar-showcase filter-cards-view'>
            {friendsImageName.map((data, index) => (
              <div className='d-inline-block friend-pic' key={index}>
                <Image className='img-50 rounded-circle' src={`${ImagePath}/user/${data}`} alt='images' width={50} height={50} />
              </div>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default FriendsCard;
