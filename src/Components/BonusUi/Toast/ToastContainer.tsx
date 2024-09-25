"use client";
import React from 'react';
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Toast } from "@/utils/Constant";
import LiveToast from "./LiveToast/LiveToast";
import ColorsSchemes from "./ColorsSchemes/ColorsSchemes";
import StackingToasts from "./StackingToasts/StackingToasts";
import TranslucentToasts from "./TranslucentToasts/TranslucentToasts";
import DefaultToast from "./DefaultToast/DefaultToast";
import UniqueToast from "./UniqueToast/UniqueToast";
import ToastPlacement from "./ToastPlacement/ToastPlacement";

const ToastContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={Toast} parent={BonusUi} title={Toast} />
      <Container fluid>
        <Row>
          <LiveToast />
          <ColorsSchemes />
          <StackingToasts />
          <TranslucentToasts />
          <DefaultToast />
          <UniqueToast />
          <ToastPlacement />
        </Row>
      </Container>
    </div>
  )
}

export default ToastContainer