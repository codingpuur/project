"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { AreaChart, BarChart2, BasicBarChart, Chart, GoogleChartHeading, LineChart2, MaterialDesign, PieChart, SliceVisibilityThreshold, StackingAreaChart } from "@/utils/Constant";
import PieChartClass from "./CommonChart/PieChartClass";
import { googleChartDatas } from "@/Data/Charts/GoogleChartData";
import PieChart6Class from "./PieChart6Class";
import ComboChartClass from "./ComboChartClass";
import PieChart2Class from "./PieChart2Class";
import PieChart3Class from "./PieChart3Class";
import PieChart4Class from "./PieChart4Class";
import PieChart5Class from "./PieChart5Class";

const GoogleChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleChartHeading} parent={Chart} title={GoogleChartHeading} />
      <Container fluid>
        <Row>
          <PieChartClass data={googleChartDatas.GoogleAreaChart} title={AreaChart} />
          <PieChartClass data={googleChartDatas.GoogleStackingChart} title={StackingAreaChart} />
          <PieChartClass data={googleChartDatas.GoogleMaterialDesignChart} title={MaterialDesign} />
          <PieChartClass data={googleChartDatas.GoogleBasicbarChart} title={BasicBarChart} />
          <PieChart6Class />
          <PieChartClass data={googleChartDatas.GoogleLineChart} title={LineChart2} colClass='col-sm-12' />
          <ComboChartClass />
          <PieChartClass data={googleChartDatas.GoogleBarChart2} title={BarChart2} colClass='col-sm-12' />
          <PieChartClass data={googleChartDatas.GooglePieChart1} title={`${PieChart}1`} />
          <PieChart2Class />
          <PieChart3Class />
          <PieChart4Class />
          <PieChart5Class />
          <PieChartClass data={googleChartDatas.GoogleSliceCharts} title={SliceVisibilityThreshold} />
        </Row>
      </Container>
    </>
  );
};

export default GoogleChartContainer;
