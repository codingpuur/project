import { Card, CardBody, Col } from "reactstrap";
import Image from "next/image";
import { ShapesData, avatarShapeData } from "@/Data/Uikits/Avatar/AvatarData";
import { ImagePath } from "@/Constant";
import { Shapes } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";

const AvatarShapes = () => {
  
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonHeader title={Shapes} subTitle={ShapesData} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className='img-100 b-r-8' src={`${ImagePath}/avtar/4.jpg`} alt="#" width={100} height={100}/>
            </div>
            {avatarShapeData &&
              avatarShapeData.map((item, index) => (
                <div key={index} className="avatar">
                  <Image className={item.class} src={`${ImagePath}/${(item.image)}`} alt="#" width={100} height={100}/>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarShapes;
