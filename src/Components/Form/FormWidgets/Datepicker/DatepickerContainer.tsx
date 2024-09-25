"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Datepickers, FormWidgetsHeading } from "@/utils/Constant";
import DefaultCalendar from "./DefaultCalendar/DefaultCalendar";
import ReactStrapCalendar from "./ReactStrapCalendar/ReactStrapCalendar";
import DatePickerComponent from "./DatePickerComponent/DatePickerComponent";
import TimePicker from "./TimePicker/TimePicker";

const DatepickerContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Datepickers} parent={FormWidgetsHeading} title={Datepickers} />
      <Container fluid>
        <Row>
          <DefaultCalendar />
          <ReactStrapCalendar />
          <DatePickerComponent />
          <TimePicker />
        </Row>
      </Container>
    </>
  );
};

export default DatepickerContainer;
