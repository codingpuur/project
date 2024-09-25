"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Generals, Widgets } from "@/utils/Constant";
import Bitcoin from "./Bitcoin/Bitcoin";
import AverageSales from "./AverageSales/AverageSales";
import Purchase from "./Purchase/Purchase";
import CompletedCourses from "./CompletedCourses/CompletedCourses";
import TotalUsers from "./TotalUsers/TotalUsers";
import Visitors from "./Visitors/Visitors";
import SocialWidget from "./SocialWidget/SocialWidget";
import NewOrders from "./NewOrders/NewOrders";
import YourBalance from "./YourBalance/YourBalance";
import DatePicker from "./DatePicker/DatePickers";

const GeneralContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Generals} parent={Widgets} title={Generals} />
      <Container fluid>
        <Row>
          <Bitcoin />
          <AverageSales />
          <Purchase />
          <CompletedCourses />
          <TotalUsers />
          <Visitors />
          <SocialWidget />
          <NewOrders />
          <YourBalance />
          <DatePicker />
        </Row>
      </Container>
    </>
  );
};

export default GeneralContainer;
