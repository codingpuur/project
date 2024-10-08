"use client";
import { Card, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, Bookmarks } from "@/utils/Constant";
import SideBar from "./SideBar/SideBar";
import BookmarksTabs from "./BookmarksTabs/BookmarksTabs";

const BookmarkContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Bookmarks} parent={Apps} title={Bookmarks} />
      <Container fluid>
        <div className='email-wrap bookmark-wrap'>
          <Row>
            <SideBar />
            <Col xl={9} md={12} className='box-col-9 xl-70'>
              <div className='email-right-aside bookmark-tabcontent'>
                <Card className='email-body radius-left'>
                  <div className='ps-0'>
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default BookmarkContainer;
