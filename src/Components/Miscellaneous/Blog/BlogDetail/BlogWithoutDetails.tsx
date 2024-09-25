import { Card, Col } from "reactstrap";
import { blogDetailData } from "@/Data/Blog/BlogData";
import ListOfBlogWithoutDetails from "./ListOfBlogWithoutDetails";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const BlogWithoutDetails = () => {
  return (
    <>
      {blogDetailData.map((data, index) => (
        <Col md={6} xl={3} className='set-col-6' key={index}>
          <Card>
            <div className='blog-box blog-grid text-center'>
              <Image width={316} height={225} className='img-fluid top-radius-blog' src={`${ImagePath}/blog/${data}.jpg`} alt='blog' />
              <ListOfBlogWithoutDetails />
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
