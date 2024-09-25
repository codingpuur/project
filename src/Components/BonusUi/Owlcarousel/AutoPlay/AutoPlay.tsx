import { Carousel } from "react-responsive-carousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { AutoPlayVariant } from "@/utils/Constant";
import { AutoPlayData, slideData } from "@/Data/BonusUi/Carousel/CarouselData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const AutoPlay = () => {
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={AutoPlayVariant} subTitle={AutoPlayData} headClass='pb-0' />
        <CardBody>
          <Carousel showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            {slideData &&
              slideData.map((item, index) => (
                <div className='item px-1' key={index}>
                  <Image src={`${ImagePath}/${item}`} alt='img' className='img-fluid rounded' height={449} width={675} />
                </div>
              ))}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlay;
