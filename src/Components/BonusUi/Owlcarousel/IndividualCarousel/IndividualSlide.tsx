import { ImagePath } from "@/Constant";
import { slideData } from "@/Data/BonusUi/Carousel/CarouselData";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const IndividualSlide = () => {
  return (
    <Carousel showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000}>
      {slideData &&
        slideData.slice(8, 11).map((item, index) => (
          <div className='item' key={index}>
            <Image src={`${ImagePath}/${item}`} alt='img' className='img-fluid' height={449} width={675} />
          </div>
        ))}
    </Carousel>
  );
};

export default IndividualSlide;
