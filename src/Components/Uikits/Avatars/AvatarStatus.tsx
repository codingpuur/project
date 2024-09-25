import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
import { StatusData, avatarStatusData } from "@/Data/Uikits/Avatar/AvatarData";
import { ImagePath } from "@/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { StatusIndicator } from "@/utils/Constant";

const AvatarStatus = () => {
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonHeader title={StatusIndicator} subTitle={StatusData} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image
                className='img-100 rounded-circle'
                src={`${ImagePath}/user/1.jpg`}
                alt="#"
                width={100}
                height={100}
              />
              <div className='status status-online' />
            </div>
            {avatarStatusData &&
              avatarStatusData.map((item, index) => (
                <div className="avatar" key={index}>
                  <Image
                    className={item.class}
                    src={`${ImagePath}/${(item.image)}`}
                    alt="#"
                    width={100}
                    height={100}
                  />
                  <div className={`status ${item.status}`} />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarStatus;
