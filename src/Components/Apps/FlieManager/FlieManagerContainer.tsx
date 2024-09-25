"use client";
import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, FileManagerHeading } from "@/utils/Constant";
import FileSideBar from "./FileSideBar/FileSideBar";
import FileContent from "./FileContent/FileContent";

const FlieManagerContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FileManagerHeading} parent={Apps} title={FileManagerHeading} />
      <Container fluid>
        <Row>
          <FileSideBar />
          <Col xl={9} md={12} className='box-col-12'>
            <div className='file-content'>
              <Card>
                <FileContent />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FlieManagerContainer;
