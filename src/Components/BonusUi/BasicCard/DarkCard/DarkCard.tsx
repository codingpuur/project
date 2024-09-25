import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { Card_Footer, DarkBodytext, DarkColorCard, DarkHeadtext } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const DarkCard = () => {
  return (
    <Col sm={12}>
      <Card className='Dark-Card'>
        <CardHeader className='bg-dark pb-0'>
          <h3 className='text-white'>{DarkColorCard}</h3>
          <p className='f-m-light mt-1'>{DarkHeadtext}</p>
        </CardHeader>
        <CardBody className='bg-dark'>
          <div className='d-flex align-items-center gap-3 pills-blogger'>
            <div className='blog-wrapper'>
              <Image className='blog-img' src={`${ImagePath}/dashboard-2/headphones.png`} alt='head-phone' height={100} width={100} />
            </div>
            <div className='blog-content'>{DarkBodytext}</div>
          </div>
        </CardBody>
        <CardFooter className='bg-dark'>
          <h6 className='mb-0'>{Card_Footer}</h6>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default DarkCard;
