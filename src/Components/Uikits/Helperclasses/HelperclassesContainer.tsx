import React from "react";
import { Container, Row } from "reactstrap";
import BorderStyle from "./BorderStyle/BorderStyle";
import Border from "./Border/Border";
import BackgroundColor from "./BackgroundColor/BackgroundColor";
import BorderColorComponent from "./BorderColorComponent/BorderColorComponent";
import ImageSize from "./ImageSize/ImageSize";
import FontStyle from "./FontStyle/FontStyle";
import FontWeight from "./FontWeight/FontWeight";
import TextColors from "./TextColors/TextColors";
import FontSize from "./FontSize/FontSize";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { HelpersClasses, UIKits } from "@/utils/Constant";

const HelperclassesContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={HelpersClasses} parent={UIKits} title={HelpersClasses} />
      <Container fluid={true}>
        <Row>
          <BorderStyle />
          <Border />
          <BackgroundColor />
          <BorderColorComponent />
          <ImageSize />
          <FontStyle />
          <FontWeight />
          <TextColors />
          <FontSize />
        </Row>
      </Container>
    </>
  );
};

export default HelperclassesContainer;
