import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { SizeData, avatarSizeData } from "@/Data/Uikits/Avatar/AvatarData";
import { Sizes } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";

const AvatarSize = () => {
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonHeader title={Sizes} subTitle={SizeData} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className='img-100 rounded-circle' src={`${ImagePath}/avtar/3.jpg`}
                alt="#"
                width={100}
                height={100}
              />
            </div>
            {avatarSizeData &&
              avatarSizeData.map((item, index) => (
                <div key={index} className="avatar">
                  <Image
                    className={item.class}
                    src={`${ImagePath}/${(item.image)}`}
                    alt="#"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarSize;
