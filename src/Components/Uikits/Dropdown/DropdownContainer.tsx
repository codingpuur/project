"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Dropdowns, UIKits } from "@/utils/Constant";
import BasicDropdown from "./BasicDropdown/BasicDropdown";
import RoundedDropdown from "./RoundedDropdown/RoundedDropdown";
import SplitDropdown from "./SplitDropdown/SplitDropdown";
import HeadingDropdown from "./HeadingDropdown/HeadingDropdown";
import DropdownwithInput from "./DropdownwithInput/DropdownwithInput";
import DarkDropdown from "./DarkDropdown/DarkDropdown";
import UniqeDropdown from "./UniqeDropdown/UniqeDropdown";
import JustifyContent from "./JustifyContent/JustifyContent";
import Alignment from "./Alignment/Alignment";
import HelperCard from "./HelperCard/HelperCard";
import DividerDropdown from "./DividerDropdown/DividerDropdown";
import DropdownSize from "./DropdownSize/DropdownSize";

const DropdownContainer = () => {
  return (
    <div>
      <Breadcrumbs mainTitle={Dropdowns} parent={UIKits} title={Dropdowns} />
      <Container fluid>
        <Row>
          <BasicDropdown />
          <RoundedDropdown />
          <SplitDropdown />
          <HeadingDropdown />
          <DropdownwithInput />
          <DarkDropdown />
          <UniqeDropdown />
          <JustifyContent />
          <Alignment />
          <HelperCard />
          <DividerDropdown />
          <DropdownSize />
        </Row>
      </Container>
    </div>
  );
};

export default DropdownContainer;
