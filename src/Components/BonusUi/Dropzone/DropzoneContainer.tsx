"use client";
import React from 'react';
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Dropzones } from "@/utils/Constant";
import DefaultDropzone from "./DefaultDropzone/DefaultDropzone";
import ImagePreview from "./ImagePreview/ImagePreview";
import SingleFileUpload from "./SingleFileUpload/SingleFileUpload";
import MultiFileUpload from "./MultiFileUpload/MultiFileUpload";

const DropzoneContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Dropzones} parent={BonusUi} title={Dropzones} />
      <Container fluid>
        <Row>
          <DefaultDropzone />
          <ImagePreview />
          <SingleFileUpload />
          <MultiFileUpload />
        </Row>
      </Container>
    </>
  )
}

export default DropzoneContainer