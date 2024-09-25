import { Col } from "reactstrap";
import { Comments } from "@/utils/Constant";
import BlogDetails from "./BlogDetails";
import UserComment from "./UserComment";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const BlogSingle = () => {
  return (
    <Col xl={9} className='xl-60'>
      <div className='blog-single'>
        <div className='blog-box blog-details'>
          <Image className='img-fluid w-100' src={`${ImagePath}/faq/learning-1.png`} alt='blog-main' height={798} width={1277}/>
          <BlogDetails />
        </div>
        <section className='comment-box'>
          <h3>{Comments}</h3>
          <hr />
          <UserComment />
        </section>
      </div>
    </Col>
  );
};

export default BlogSingle;
