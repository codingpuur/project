"use client";
import React from 'react'
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ReactstrapBasicTables, ReactstrapTables} from "../../../../utils/Constant";
import BasicTableClass from "./BasicTableClass/BasicTableClass";
import InverseTableClass from "./InverseTableClass/InverseTableClass";
import HoverableRowsClass from "./HoverableRowsClass/HoverableRowsClass";
import InversePrimaryClass from "./InversePrimaryClass/InversePrimaryClass";
import CaptionClass from "./CaptionClass/CaptionClass";
import TableHeadClass from "./TableHeadClass/TableHeadClass";
import StripeInverseClass from "./StripeInverseClass/StripeInverseClass";
import BreckPointClass from "./BreckPointClass/BreckPointClass";
import ResponsiveClass from "./ResponsiveClass/ResponsiveClass";
import SizingTable from "./SizingTable/SizingTable";
import CustomHoverClass from "./CustomHoverClass/CustomHoverClass";
import DashedBorderClass from "./DashedBorderClass/DashedBorderClass";

const BasicTablesContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ReactstrapBasicTables} parent={ReactstrapTables} title={ReactstrapBasicTables}/>
      <Container className="basic_table" fluid>
        <Row>
          <BasicTableClass />
          <InverseTableClass />
          <HoverableRowsClass />
          <InversePrimaryClass />
          <CaptionClass />
          <TableHeadClass />
          <StripeInverseClass />
          <BreckPointClass />
          <ResponsiveClass />
          <SizingTable />
          <CustomHoverClass />
          <DashedBorderClass />
        </Row>
      </Container>
    </>
  )
}

export default BasicTablesContainer