import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
import { RatioData, avatarRatioData } from "@/Data/Uikits/Avatar/AvatarData";
import { ImagePath } from "@/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { Ratio } from "@/utils/Constant";

const AvatarRatio = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={Ratio} subTitle={RatioData} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar ratio">
              <Image className='b-r-8 img-100' src={`${ImagePath}/avtar/11.jpg`} alt="#" width={100} height={100}/>
            </div>
            {avatarRatioData &&
              avatarRatioData.map((item, index) => (
                <div className="avatar ratio" key={index}>
                  <Image className={item.class} src={`${ImagePath}/${(item.image)}`} alt="#" width={100} height={100}/>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarRatio;
