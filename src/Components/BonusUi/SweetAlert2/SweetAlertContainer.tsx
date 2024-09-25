"use client";
import React from 'react';
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, SweetAlerts } from "@/utils/Constant";
import BasicAlert from "./BasicAlert/BasicAlert";
import TitleWithText from "./TitleWithText/TitleWithText";
import InfoAlert from "./InfoAlert/InfoAlert";
import WarningAlert from "./WarningAlert/WarningAlert";
import PikashuAlert from "./PikashuAlert/PikashuAlert";
import QuestionAlert from "./QuestionAlert/QuestionAlert";
import UserNameAlert from "./UserNameAlert/UserNameAlert";
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import DangerAlert from "./DangerAlert/DangerAlert";
import WarningMode from "./WarningMode/WarningMode";
import AutoCloseAlert from "./AutoCloseAlert/AutoCloseAlert";
import MovieAlert from "./MovieAlert/MovieAlert";

const SweetAlertContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={SweetAlerts} parent={BonusUi} title={SweetAlerts}/>
      <Container fluid>
        <Row>
          <BasicAlert />
          <TitleWithText />
          <InfoAlert />
          <WarningAlert />
          <PikashuAlert />
          <QuestionAlert />
          <UserNameAlert />
          <SuccessMessage />
          <DangerAlert />
          <WarningMode />
          <AutoCloseAlert />
          <MovieAlert />
        </Row>
      </Container>
    </div>
  )
}

export default SweetAlertContainer;