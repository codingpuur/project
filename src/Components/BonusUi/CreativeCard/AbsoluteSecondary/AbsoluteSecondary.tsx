import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { AbsoluteCard, AbsoluteSecondarytext } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const AbsoluteSecondary = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="card-absolute">
        <CardHeader className="bg-secondary">
          <h5 className="txt-light">{AbsoluteCard}</h5>
        </CardHeader>
        <CardBody>
          <div className="d-flex list-behavior-1 align-items-center mt-2">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={`${ImagePath}/blog/blog.jpg`} alt="home" width={155} height={100}/>
            </div>
            <div className="flex-grow-1">
              <p className="mb-xl-0 mb-sm-4">{AbsoluteSecondarytext}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AbsoluteSecondary;
