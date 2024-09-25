"use client";
import React from 'react';
import Breadcrumbs from '@/CommonElements/Breadcrumbs/Breadcrumbs';
import GridOptions from "./GridOptions/GridOptions";
import GridColumn from "./GridColumn/GridColumn";
import VerticalAlignment from "./VerticalAlignment/VerticalAlignment";
import HorizontalAlignment from "./HorizontalAlignment/HorizontalAlignment";
import Nesting from "./Nesting/Nesting";
import Order from "./Order/Order";
import Offset from "./Offset/Offset";
import { Container, Row } from 'reactstrap';
import { Grids, UIKits } from '@/utils/Constant';

const GridContainer = () => {
  return (
    <><Breadcrumbs mainTitle={Grids} parent={UIKits} title={Grids} />
    <Container fluid={true}>
      <Row>
        <GridOptions />
        <GridColumn />
        <VerticalAlignment />
        <HorizontalAlignment />
        <Nesting />
        <Order />
        <Offset />
      </Row>
    </Container></>
  )
}

export default GridContainer