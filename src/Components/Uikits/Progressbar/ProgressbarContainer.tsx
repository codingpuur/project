"use client";
import React from 'react'
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Progress, UIKits } from "@/utils/Constant";
import BasicProgress from "./BasicProgress/BasicProgress";
import StripedProgress from "./StripedProgress/StripedProgress";
import AnimetedProgress from "./AnimetedProgress/AnimetedProgress";
import MultipleBars from "./MultipleBars/MultipleBars";
import ProgressWithNumber from "./ProgressWithNumber/ProgressWithNumber";
import CustomProgress from "./CustomProgress/CustomProgress";
import SmallProgress from "./SmallProgress/SmallProgress";
import LargeProgress from "./LargeProgress/LargeProgress";
import CustomHeightProgress from "./CustomHeightProgress/CustomHeightProgress";

const ProgressbarContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Progress} parent={UIKits} title={Progress} />
      <Container fluid={true}>
        <Row>
          <BasicProgress />
          <StripedProgress />
          <AnimetedProgress />
          <MultipleBars />
          <ProgressWithNumber />
          <CustomProgress />
          <SmallProgress />
          <LargeProgress />
          <CustomHeightProgress />
        </Row>
      </Container>
    </>
  )
}

export default ProgressbarContainer