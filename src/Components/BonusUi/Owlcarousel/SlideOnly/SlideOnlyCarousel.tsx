import { ImagePath } from "@/Constant";
import { slideData } from "@/Data/BonusUi/Carousel/CarouselData";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const SlideOnlyCarousel = () => {
  return (
    <>
      <Carousel showArrows={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
        {slideData &&
          slideData.slice(0, 3).map((item, index) => (
            <div className='item' key={index}>
              <Image src={`${ImagePath}/${item}`} alt='img' className='img-fluid' height={449} width={675} />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default SlideOnlyCarousel;
