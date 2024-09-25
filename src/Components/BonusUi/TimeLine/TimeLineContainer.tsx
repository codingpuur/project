"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, TimeLines } from "@/utils/Constant";
import BasicTimeLine from "./BasicTimeLine/BasicTimeLine";
import HoverTimeline from "./HoverTimeline/HoverTimeline";
import VariationTimeline from "./VariationTimeline/VariationTimeline";
import HowizontalTimeline from "./HowizontalTimeline/HowizontalTimeline";
import TimeLineMain from "./TimeLineMain/TimeLineMain";

const TimeLineContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TimeLines} title={BonusUi} parent={TimeLines} />
      <Container fluid>
        <Row>
          <BasicTimeLine />
          <HoverTimeline />
          <VariationTimeline />
          <HowizontalTimeline />
          <TimeLineMain />
        </Row>
      </Container>
    </>
  );
};

export default TimeLineContainer;
