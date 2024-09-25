import { ImagePath } from "@/Constant";
import { slideData } from "@/Data/BonusUi/Carousel/CarouselData";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const CenterMode = () => {
  return (
    <Carousel centerMode showIndicators={false} showStatus={false} infiniteLoop={true}>
      {slideData &&
        slideData.map((item, index) => (
          <div className='item pe-2' key={index}>
            <Image src={`${ImagePath}/${item}`} alt='img' className='img-fluid rounded' height={449} width={675} />
          </div>
        ))}
    </Carousel>
  );
};

export default CenterMode;
