import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { IconHeadtext, IconHeadtext2, IconInHeading } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const HeadIcon = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CardHeader className='pb-0'>
          <h3>
            <i className='icofont icofont-library me-2' />
            {IconInHeading}
          </h3>
          <p className='f-m-light mt-1'>{IconHeadtext}</p>
        </CardHeader>
        <CardBody>
          <div className='d-flex gap-3 align-items-center list-behavior-1'>
            <div className='flex-shrink-0'>
              <Image className='tab-img img-fluid' src={`${ImagePath}/blog/img.png`} alt='home' height={100} width={156} />
            </div>
            <div className='flex-grow-1 ms-0'>{IconHeadtext2}</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadIcon;
