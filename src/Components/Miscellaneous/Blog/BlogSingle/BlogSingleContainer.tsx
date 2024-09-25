"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Blog, BlogSingles, Comments } from "@/utils/Constant";
import SingleBlogDetails from "./SingleBlogDetails";
import CommentSection from "./CommentSection";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const BlogSingleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogSingles} parent={Blog} title={BlogSingles} />
      <Container fluid className='blog-list-items'>
        <Row>
          <Col sm={12}>
            <div className='blog-single'>
              <div className='blog-box blog-details'>
                <Image width={1472} height={276} className='img-fluid w-100' src={`${ImagePath}/blog/blog-single.jpg`} alt='blog-main' />
                <SingleBlogDetails />
                <section className='comment-box'>
                  <h3>{Comments}</h3>
                  <hr />
                  <CommentSection />
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogSingleContainer;
