"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { AdvanceInitHeading, DataTables } from "@/utils/Constant";
import StockResult from "./StockResult/StockResult";
import RowCreateCallback from "./RowCreateCallback/RowCreateCallback";

const AdvanceInitContainer = () => {
  return (
    <div>
      <Breadcrumbs title={AdvanceInitHeading} mainTitle={AdvanceInitHeading} parent={DataTables} />
      <Container fluid>
        <Row>
          <StockResult />
          <RowCreateCallback />
        </Row>
      </Container>
    </div>
  );
};

export default AdvanceInitContainer;
