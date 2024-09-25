import { Card, CardBody, Col } from "reactstrap";
import { ImageSizeData, imageData } from "@/Data/Uikits/HelperClass/HelperClassData";
import Image from "next/image";
import { ImagePath } from "@/Constant";
import { ImagesSizes } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";

const ImageSize = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={ImagesSizes} subTitle={ImageSizeData} headClass='pb-0'/>
        <CardBody>
          <div className="gradient-border gap-3">
            <Image className={'img-30 img-h-30'} src={`${ImagePath}/blog/comment.jpg`} alt="img-size-10" height={100} width={100}/>
            {imageData &&
              imageData.map((item, index) => (
                <Image
                  className={item.class}
                  src={`${ImagePath}/blog/comment.jpg`}
                  alt="img-size-10"
                  key={index}
                  height={100}
                  width={100}
                />
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageSize;
