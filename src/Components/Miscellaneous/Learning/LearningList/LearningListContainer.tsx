"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Learning, LearningListHeading } from "@/utils/Constant";
import MainLearningCards from "./MainLearningCards/MainLearningCards";
import SmallLearningCards from "./SmallLearningCards/SmallLearningCards";
import CourseFilter from "./CourseFilter/CourseFilter";

const LearningListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LearningListHeading} parent={Learning} title={LearningListHeading} />
      <Container fluid>
        <Row>
          <Col xl={9} className='xl-60'>
            <Row>
              <MainLearningCards />
              <SmallLearningCards />
            </Row>
          </Col>
          <CourseFilter />
        </Row>
      </Container>
    </>
  );
};

export default LearningListContainer;
