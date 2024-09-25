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
import DerivativeAnalysisTable from "./DerivativeAnalysisTable/DerivativeAnalysisTable";
import StockTable from "./StockTable/StockTable";
import SectorPerformanceChart from "./SectorPerformanceChart/SectorPerformanceChart";
import OptionChainTable from "./OptionChainTable/OptionChainTable";

const ApexChartStokes = ({name}:any) => {
  const optionData = [
    {
      strikePrice: 150,
      callBid: 2.5,
      callAsk: 2.7,
      callVolume: 120,
      putBid: 1.8,
      putAsk: 2.0,
      putVolume: 140,
    },
    {
      strikePrice: 160,
      callBid: 3.2,
      callAsk: 3.5,
      callVolume: 110,
      putBid: 2.1,
      putAsk: 2.3,
      putVolume: 130,
    },
    {
      strikePrice: 160,
      callBid: 3.2,
      callAsk: 3.5,
      callVolume: 110,
      putBid: 2.1,
      putAsk: 2.3,
      putVolume: 130,
    },
    {
      strikePrice: 160,
      callBid: 3.2,
      callAsk: 3.5,
      callVolume: 110,
      putBid: 2.1,
      putAsk: 2.3,
      putVolume: 130,
    },
    // Add more data here
  ];
  return (
    <>
      <Breadcrumbs mainTitle={name} title={name} parent={"Market"} />
      <Container fluid>
        <Row>
          {/* <BasicAreaChartClass />
          <AreaSpalineChartClass />
          <BarChartClass />
          <ColumnChartClass />
          <BubbleChartClass />
          <SteplineChartClass />
          <ApexLineChartClass />
          <PieChartClass />
          <DonutChartClass />
          <MixedChartClass /> */}
          <CandlestickChartClass />
          {/* <DerivativeAnalysisTable/> */}
          {/* <RadarChartClass /> */}
          {/* <RadialBarChartClass /> */}
          {/* <BasicAreaChartClass /> */}
          <SectorPerformanceChart />
          <OptionChainTable optionData={optionData}/>
          <StockTable />
        </Row>
      </Container>
    </>
  );
};

export default ApexChartStokes;
