import { ImagePath } from "@/Constant";
import { sliderCaptionData } from "@/Data/BonusUi/Carousel/CarouselData";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const CaptionSlider = () => {
  return (
    <Carousel showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
      {sliderCaptionData &&
        sliderCaptionData.map((item, index) => (
          <div className='item pe-2' key={index}>
            <Image src={`${ImagePath}/${item.img}`} alt='img' className='img-fluid rounded' height={449} width={675} />
            <h5>{item.caption}</h5>
            <p>{item.describe}</p>
            {item.caption}
          </div>
        ))}
    </Carousel>
  );
};

export default CaptionSlider;
