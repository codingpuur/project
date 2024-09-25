"use client";
import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Charts, Widgets } from "@/utils/Constant";
import TotalSaleWidgets from "./TotalSaleWidgets/TotalSaleWidgets";
import MonthlyHistory from "./MonthlyHistory/MonthlyHistory";
import LiveProducts from "./LiveProducts/LiveProducts";
import StockMarket from "./StockMarket/StockMarket";

const ChartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Charts} parent={Widgets} title={Charts} />
      <Container fluid>
        <TotalSaleWidgets />
        <MonthlyHistory />
        <LiveProducts />
        <StockMarket />
      </Container>
    </>
  );
};

export default ChartContainer;
