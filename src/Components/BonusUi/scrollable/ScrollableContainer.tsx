"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Scrollables } from "@/utils/Constant";
import CustomScroll from "./CustomScroll/CustomScroll";
import SmallSizeScroll from "./SmallSizeScroll/SmallSizeScroll";
import BadgesScroll from "./BadgesScroll/BadgesScroll";
import ProfileScroll from "./ProfileScroll/ProfileScroll";
import ScrollableContent from "./ScrollableContent/ScrollableContent";
import HorizontalScroll from "./HorizontalScroll/HorizontalScroll";
import BothSideScroll from "./BothSideScroll/BothSideScroll";

const ScrollableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Scrollables} parent={BonusUi} title={Scrollables} />
      <Container fluid>
        <Row>
          <CustomScroll />
          <SmallSizeScroll />
          <BadgesScroll />
          <ProfileScroll />
          <ScrollableContent />
          <HorizontalScroll />
          <BothSideScroll />
        </Row>
      </Container>
    </>
  );
};

export default ScrollableContainer;
