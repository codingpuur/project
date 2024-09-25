"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, TreeViews } from "@/utils/Constant";
import BasicTree from "./BasicTree/BasicTree";
import DisabledTree from "./DisabledTree/DisabledTree";

const TreeviewContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={TreeViews} parent={BonusUi} title={TreeViews} />
      <Container fluid>
        <Row>
          <BasicTree />
          <DisabledTree />
        </Row>
      </Container>
    </div>
  );
};

export default TreeviewContainer;
