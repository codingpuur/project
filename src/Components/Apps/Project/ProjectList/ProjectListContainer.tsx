"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { ProjectListHeading, Projects } from "@/utils/Constant";
import ProjectListNav from "./ProjectListNav";
import ProjectListTabContent from "./ProjectListTabContent";

const ProjectListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectListHeading} parent={Projects} title={ProjectListHeading} />
      <Container fluid>
        <Row className='project-card'>
          <Col md={12} className='project-list'>
            <ProjectListNav />
          </Col>
          <Col sm={12}>
            <ProjectListTabContent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectListContainer;
