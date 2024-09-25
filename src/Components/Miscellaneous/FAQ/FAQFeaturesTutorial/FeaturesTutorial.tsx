import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { featuredData } from "@/Data/FAQ/FAQData";
import ProductHover from "./ProductHover";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const FeaturesTutorial = () => {
  return (
    <>
      {featuredData.map((item, id) => (
        <Col xl={3} sm={6} className='box-col-3' key={id}>
          <Card className='features-faq product-box'>
            <div className='faq-image product-img'>
              <div className='knowledgebase-image'>
                <Image alt='feature' className='img-fluid' src={`${ImagePath}/${item.img}`} height={326} width={435} />
              </div>
              <ProductHover />
            </div>
            <CardBody className='pb-0'>
              <h6>{item.title}</h6>
              <p>{item.short_description}</p>
            </CardBody>
            <CardFooter className='d-flex align-items-center justify-content-between'>
              <span>{item.date}</span>
              <Rating fillColor='#35bfbf' initialValue={Math.random() * 5} size={14} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default FeaturesTutorial;
