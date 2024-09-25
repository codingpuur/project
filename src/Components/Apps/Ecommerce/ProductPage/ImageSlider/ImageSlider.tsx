import { Carousel } from "react-responsive-carousel";
import { Card, CardBody } from "reactstrap";

const ImageSlider = () => {
  return (
    <Card>
      <CardBody>
        <Carousel className="owl-carousel owl-theme" showStatus={false} showIndicators={false} showArrows={false}>
          <div className="item">
            <img src="../assets/images/ecommerce/01.jpg" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/02.jpg" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/03.jpg" />
          </div> 
          <div className="item">
            <img src="../assets/images/ecommerce/04.jpg" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/05.jpg" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/06.jpg" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/07.jpg" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/08.jpg" />
          </div>
        </Carousel>
      </CardBody>
    </Card>
  );
};

export default ImageSlider;
