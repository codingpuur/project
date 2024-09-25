"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { CRMDashboards, Dashboard } from "@/utils/Constant";
import ExclusiveSelection from "./ExclusiveSelection/ExclusiveSelection";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import TopCustomer from "./TopCustomer/TopCustomer";
import AllNotification from "./AllNotification/AllNotification";
import BalanceOverview from "./BalanceOverview/BalanceOverview";
import SalesAnalyics from "./SalesAnalyics/SalesAnalyics";
import DealOpen from "./DealOpen/DealOpen";

const CRMDashboardContainer = () => {
  return (
    <>
      <Container fluid className='crm_dashboard'>
        <Row className='widget-grid'>
          <Breadcrumbs mainTitle={CRMDashboards} parent={Dashboard} title={CRMDashboards} />
          <Col xl={8}>
            <Row>
              <ExclusiveSelection />
              <TransactionHistory />
            </Row>
          </Col>
          <TopCustomer />
          <AllNotification />
          <BalanceOverview />
          <SalesAnalyics />
          <DealOpen />
        </Row>
      </Container>
    </>
  );
};

export default CRMDashboardContainer;
