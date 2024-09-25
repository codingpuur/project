"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { DATASourceDataTables, DataTables } from "@/utils/Constant";
import HtmlSourcedData from "./HtmlSourcedData/HtmlSourcedData";
import AjaxSourcedData from "./AjaxSourcedData/AjaxSourcedData";
import JavaScriptSourcedData from "./JavaScriptSourcedData/JavaScriptSourcedData";
import ServerSideProcessing from "./ServerSideProcessing/ServerSideProcessing";

const DataSourcesContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={DATASourceDataTables} parent={DataTables} title={DATASourceDataTables} />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavaScriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </div>
  );
};

export default DataSourcesContainer;
