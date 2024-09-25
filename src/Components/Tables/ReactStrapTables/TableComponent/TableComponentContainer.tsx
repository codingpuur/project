"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { ReactstrapTables, TableComponents } from "@/utils/Constant";
import UiComponents from "./UiComponents/UiComponents";
import Alerts from "./Alerts/Alerts";
import Progressbar from "./Progressbar/Progressbar";
import Checkbox from "./Checkbox/Checkbox";
import RadioButtons from "./RadioButtons/RadioButtons";
import Select from "./Select/Select";
import Input from "./Input/Input";
import Badges from "./Badges/Badges";
import TooltipTriggers from "./TooltipTriggers/TooltipTriggers";
import Switch from "./Switch/Switch";

const TableComponentContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TableComponents} parent={ReactstrapTables} title={TableComponents} />
      <Container fluid>
        <Row>
          <UiComponents />
          <Alerts />
          <Progressbar />
          <Checkbox />
          <RadioButtons />
          <Select />
          <Input />
          <Badges />
          <TooltipTriggers />
          <Switch />
        </Row>
      </Container>
    </>
  );
};

export default TableComponentContainer;
