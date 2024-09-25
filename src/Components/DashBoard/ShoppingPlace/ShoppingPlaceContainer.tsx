"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import { Dashboard, Default, ShoppingPlaceDashboard } from "@/utils/Constant";
import TotalEarning from "../ShoppingPlace/TotalEarning/TotalEarning";
import RecentOrders from "../ShoppingPlace/RecentOrders/RecentOrders";
import TopSeller from "../ShoppingPlace/TopSeller/TopSeller";
import NewProduct from "../ShoppingPlace/NewProduct/NewProduct";
import TopCountries from "../ShoppingPlace/TopCountries/TopCountries";
import ActivityTimeline from "../ShoppingPlace/ActivityTimeline/ActivityTimeline";
import SalesSummary from "../ShoppingPlace/SalesSummary/SalesSummary";
import WeekendSale from "../ShoppingPlace/WeekendSale/WeekendSale";
import Invoice from "../ShoppingPlace/Invoice/Invoice";
import ProductSales from "../ShoppingPlace/ProductSales/ProductSales";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";

const ShoppingPlaceContainer = () => {
  return (
    <>
      <Container fluid className='dashboard_default'>
        <Row className='widget-grid'>
          <Breadcrumbs mainTitle={ShoppingPlaceDashboard} parent={Dashboard} title={Default} />
          <TotalEarning />
          <RecentOrders />
          <TopSeller />
          <NewProduct />
          <TopCountries />
          <ActivityTimeline />
          <SalesSummary />
          <WeekendSale />
          <Invoice />
          <ProductSales />
        </Row>
      </Container>
    </>
  );
};

export default ShoppingPlaceContainer;
