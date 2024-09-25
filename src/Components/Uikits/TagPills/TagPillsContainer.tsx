"use client";
import React from 'react';
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Tagpills, UIKits } from "@/utils/Constant";
import Badges from "./Badges";
import PillsContextual from "./PillsContextual";
import NumberBadges from "./NumberBadges";
import NumberPills from "./NumberPills";
import BadgeWithIcon from "./BadgeWithIcon";
import RoundedPillIcon from "./RoundedPillIcon";
import BadgeHeading from "./BadgeHeading";
import BadgeButton from "./BadgeButton";

const TagPillsContainer = () => {
  return (
    <>
     <Breadcrumbs mainTitle={Tagpills} parent={UIKits} title={Tagpills} />
      <Container fluid={true}>
        <Row>
          <Badges />
          <PillsContextual />
          <NumberBadges />
          <NumberPills />
          <BadgeWithIcon />
          <RoundedPillIcon />
          <BadgeHeading />
          <BadgeButton /> 
        </Row>
      </Container>
    </>
  )
}

export default TagPillsContainer