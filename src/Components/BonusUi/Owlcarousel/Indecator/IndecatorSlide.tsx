import { Carousel } from "react-responsive-carousel";
import { slideData } from "@/Data/BonusUi/Carousel/CarouselData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const IndecatorSlide = () => {
  return (
    <Carousel showStatus={false} autoPlay={true} infiniteLoop={true}>
      {slideData &&
        slideData.slice(0, 3).map((item, index) => (
          <div className='item' key={index}>
            <Image src={`${ImagePath}/${item}`} alt='img' className='img-fluid' height={449} width={675} />
          </div>
        ))}
    </Carousel>
  );
};

export default IndecatorSlide;
