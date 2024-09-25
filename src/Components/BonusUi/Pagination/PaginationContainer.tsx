"use client";
import React from 'react';
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Pagination } from "@/utils/Constant";
import DefaultPagination from "./DefaultPagination/DefaultPagination";
import ActiveDisable from "./ActiveDisable/ActiveDisable";
import IconPagination from "./IconPagination/IconPagination";
import RoundedPagination from "./RoundedPagination/RoundedPagination";
import PaginationAlign from "./PaginationAlign/PaginationAlign";
import PaginationSize from "./PaginationSize/PaginationSize";

const PaginationContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Pagination} parent={BonusUi} title={Pagination} />
      <Container fluid={true}>
        <Row>
          <DefaultPagination />
          <ActiveDisable />
          <IconPagination />
          <RoundedPagination />
          <PaginationAlign />
          <PaginationSize />
        </Row>
      </Container>
    </>
  )
}

export default PaginationContainer