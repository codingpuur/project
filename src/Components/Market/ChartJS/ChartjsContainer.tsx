"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Chart, GoogleChartHeading } from "@/utils/Constant";
import BarChartClass from "./BarChartClass/BarChartClass";
import LineChartClass from "./LineChartClass/LineChartClass";
import RadarChartClass from "./RadarChartClass/RadarChartClass";
import LineChart2Class from "./LineChart2Class/LineChart2Class";
import DoughnutChartClass from "./DoughnutChartClass/DoughnutChartClass";
import PolarChartClass from "./PolarChartClass/PolarChartClass";

const ChartjsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleChartHeading} parent={Chart} title={GoogleChartHeading} />
      <Container fluid>
        <Row>
          <BarChartClass />
          <LineChartClass />
          <RadarChartClass />
          <LineChart2Class />
          <DoughnutChartClass />
          <PolarChartClass />
        </Row>
      </Container>
    </>
  );
};

export default ChartjsContainer;
