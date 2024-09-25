"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi } from "@/utils/Constant";
import DefaultBreadcrumb from "./DefaultBreadcrumb/DefaultBreadcrumb";
import DividerBread from "./DividerBread/DividerBread";
import WithIcon from "./WithIcon/WithIcon";
import Variation from "./Variation/Variation";
import ColoredBread from "./ColoredBread/ColoredBread";

const BreadcrumbContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={"Breadcrumb"} parent={BonusUi} title={"Breadcrumb"} />
      <Container fluid>
        <Row>
          <DefaultBreadcrumb />
          <DividerBread />
          <WithIcon />
          <Variation />
          <ColoredBread />
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbContainer;
