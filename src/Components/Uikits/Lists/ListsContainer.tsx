"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { List, UIKits } from "@/utils/Constant";
import DefaultList from "./DefaultList/DefaultList";
import ContextualClass from "./ContextualClass/ContextualClass";
import HorizontalList from "./HorizontalList/HorizontalList";
import CustomList from "./CustomList/CustomList";
import ListWithCheckbox from "./ListWithCheckbox/ListWithCheckbox";
import RadioList from "./RadioList/RadioList";
import ListNumber from "./ListNumber/ListNumber";
import BadgeList from "./BadgeList/BadgeList";
import DisableList from "./DisableList/DisableList";
import ScrollableList from "./ScrollableList/ScrollableList";
import JsBehavior from "./JsBehavior/JsBehavior";

const ListsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={List} parent={UIKits} title={List} />
      <Container fluid>
        <Row>
          <DefaultList />
          <ContextualClass />
          <HorizontalList />
          <CustomList />
          <ListWithCheckbox />
          <RadioList />
          <ListNumber />
          <JsBehavior />
          <BadgeList />
          <DisableList />
          <ScrollableList />
        </Row>
      </Container>
    </>
  );
};

export default ListsContainer;
