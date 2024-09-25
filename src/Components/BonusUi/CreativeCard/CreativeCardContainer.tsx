"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, CreativeCards } from "@/utils/Constant";
import BorderLeft from "./BorderLeft/BorderLeft";
import BorderRight from "./BorderRight/BorderRight";
import BorderTop from "./BorderTop/BorderTop";
import BorderBottom from "./BorderBottom/BorderBottom";
import BorderPrimary from "./BorderPrimary/BorderPrimary";
import BorderWarning from "./BorderWarning/BorderWarning";
import BorderSecondary from "./BorderSecondary/BorderSecondary";
import AbsolutePrimary from "./AbsolutePrimary/AbsolutePrimary";
import AbsoluteSecondary from "./AbsoluteSecondary/AbsoluteSecondary";

const CreativeCardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CreativeCards} parent={BonusUi} title={CreativeCards} />
      <Container fluid>
        <Row>
          <BorderLeft />
          <BorderRight />
          <BorderTop />
          <BorderBottom />
          <BorderPrimary />
          <BorderWarning />
          <BorderSecondary />
          <AbsolutePrimary />
          <AbsoluteSecondary />
        </Row>
      </Container>
    </>
  );
};

export default CreativeCardContainer;
