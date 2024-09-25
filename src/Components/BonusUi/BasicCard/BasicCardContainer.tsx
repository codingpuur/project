"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicCards, BonusUi } from "@/utils/Constant";
import DefaultBasic from "./DefaultBasic/DefaultBasic";
import FlatCard from "./FlatCard/FlatCard";
import WithoutShadow from "./WithoutShadow/WithoutShadow";
import HeadIcon from "./HeadIcon/HeadIcon";
import DarkCard from "./DarkCard/DarkCard";
import InfoColorHead from "./InfoColorHead/InfoColorHead";
import InfoColorBody from "./InfoColorBody/InfoColorBody";
import InfoColorFooter from "./InfoColorFooter/InfoColorFooter";

const BasicCardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BasicCards} parent={BonusUi} title={BasicCards} />
      <Container fluid>
        <Row>
          <DefaultBasic />
          <FlatCard />
          <WithoutShadow />
          <HeadIcon />
          <DarkCard />
          <InfoColorHead />
          <InfoColorBody />
          <InfoColorFooter />
        </Row>
      </Container>
    </>
  );
};

export default BasicCardContainer;
