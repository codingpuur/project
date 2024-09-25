"use client";
import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, ImageCroppers } from "@/utils/Constant";
import ImageCropperBody from "./ImageCropperBody";

const ImagecropperContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageCroppers} parent={BonusUi} title={ImageCroppers} />
      <Container fluid>
        <ImageCropperBody />
      </Container>
    </>
  );
};

export default ImagecropperContainer;
