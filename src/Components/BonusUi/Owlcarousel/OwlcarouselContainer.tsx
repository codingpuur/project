"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, OwlCarousels } from "@/utils/Constant";
import SlideOnly from "./SlideOnly/SlideOnly";
import WithControll from "./WithControll/WithControll";
import AutoPlay from "./AutoPlay/AutoPlay";
import Indicator from "./Indecator/Indecator";
import IndividualCarousel from "./IndividualCarousel/IndividualCarousel";
import VerticalCarousel from "./VerticalCarousel/VerticalCarousel";
import WithCaption from "./WithCaption/WithCaption";
import CenterSlide from "./CenterSlide/CenterSlide";

const OwlcarouselContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={OwlCarousels} parent={BonusUi} title={OwlCarousels} />
      <Container fluid>
        <Row>
          <SlideOnly />
          <WithControll />
          <AutoPlay />
          <Indicator />
          <IndividualCarousel />
          <VerticalCarousel />
          <WithCaption />
          <CenterSlide />
        </Row>
      </Container>
    </>
  );
};

export default OwlcarouselContainer;
