"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Alerts, UIKits } from "@/utils/Constant";
import LinkColor from "./LinkColor/LinkColor";
import LightColorAlert from "./LightColorAlert/LightColorAlert";
import OutlineAlert from "./OutlineAlert/OutlineAlert";
import AlertWithIcon from "./AlertWithIcon/AlertWithIcon";
import DarkAlert from "./DarkAlert/DarkAlert";
import DismissingLight from "./DismissingLight/DismissingLight";
import LiveAlert from "./LiveAlert/LiveAlert";
import LeftBorderAlert from "./LeftBorderAlert/LeftBorderAlert";
import AdditionalAlert from "./AdditionalAlert/AdditionalAlert";

const AlertContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Alerts} parent={UIKits} title={Alerts} />
      <Container fluid>
        <Row>
          <LinkColor />
          <LightColorAlert />
          <OutlineAlert />
          <AlertWithIcon />
          <DarkAlert />
          <DismissingLight />
          <LiveAlert />
          <LeftBorderAlert />
          <AdditionalAlert />
        </Row>
      </Container>
    </>
  );
};

export default AlertContainer;
