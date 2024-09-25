"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { ApexChartHeading, Chart } from "@/utils/Constant";
import BasicAreaChartClass from "./BasicAreaChartClass/BasicAreaChartClass";
import AreaSpalineChartClass from "./AreaSpalineChartClass/AreaSpalineChartClass";
import BarChartClass from "./BarChartClass/BarChartClass";
import ColumnChartClass from "./ColumnChartClass/ColumnChartClass";
import BubbleChartClass from "./BubbleChartClass/BubbleChartClass";
import SteplineChartClass from "./SteplineChartClass/SteplineChartClass";
import ApexLineChartClass from "./ApexLineChartClass/ApexLineChartClass";
import PieChartClass from "./PieChartClass/PieChartClass";
import DonutChartClass from "./DonutChartClass/DonutChartClass";
import MixedChartClass from "./MixedChartClass/MixedChartClass";
import CandlestickChartClass from "./CandlestickChartClass/CandlestickChartClass";
import RadarChartClass from "./RadarChartClass/RadarChartClass";
import RadialBarChartClass from "./RadialBarChartClass/RadialBarChartClass";

const ApexChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ApexChartHeading} title={ApexChartHeading} parent={Chart} />
      <Container fluid>
        <Row>
          <BasicAreaChartClass />
          <AreaSpalineChartClass />
          <BarChartClass />
          <ColumnChartClass />
          <BubbleChartClass />
          <SteplineChartClass />
          <ApexLineChartClass />
          <PieChartClass />
          <DonutChartClass />
          <MixedChartClass />
          <CandlestickChartClass />
          <RadarChartClass />
          <RadialBarChartClass />
        </Row>
      </Container>
    </>
  );
};

export default ApexChartContainer;
