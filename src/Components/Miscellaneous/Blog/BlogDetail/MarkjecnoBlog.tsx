import { Card, Col } from "reactstrap";
import MarkjencoBlogDetails from "./MarkjencoBlogDetails";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const MarkjecnoBlog = () => {
  return (
    <Col xxl={6} className='box-col-40 xl-40'>
      <Card>
        <div className='blog-box blog-shadow'>
          <Image className='img-fluid' src={`${ImagePath}/blog/blog.jpg`} alt='blog image' width={894} height={558}/>
          <MarkjencoBlogDetails />
        </div>
      </Card>
    </Col>
  );
};

export default MarkjecnoBlog;
