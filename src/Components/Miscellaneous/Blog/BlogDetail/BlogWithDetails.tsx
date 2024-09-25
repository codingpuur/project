import { Card, Col, Row } from "reactstrap";
import { blogData } from "@/Data/Blog/BlogData";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const BlogWithDetails = () => {
  return (
    <Col xxl={6} className='box-col-60 xl-60'>
      {blogData.map((data, index) => (
        <Card key={index}>
          <Row className='blog-box blog-list'>
            <Col sm={5}>
              <Image className='img-fluid sm-100-w' src={`${ImagePath}/blog/blog-${data.image}.jpg`} alt='images' width={316} height={225}/>
            </Col>
            <Col sm={7}>
              <div className='blog-details'>
                <div className='blog-date'>
                  <span>{data.date}</span> January 2023
                </div>
                <h4>{"Encounter every day."}</h4>
                <div className='blog-bottom-content'>
                  <ul className='blog-social flex-row simple-list blog-sub-content'>
                    <li>
                      {"By"} : {"Admin"}
                    </li>
                    <li className='digits'>
                      {data.hits} : {"Hits"}
                    </li>
                  </ul>
                  <hr />
                  <p className='mt-0 f-w-500'>{"A huge part of it is the incomparable beauty you can encounter every day."}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogWithDetails;
