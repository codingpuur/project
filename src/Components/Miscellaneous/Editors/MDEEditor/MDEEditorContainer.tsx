"use client";
import { Container } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Editor, MDEEditors } from "@/utils/Constant";
import FirstExample from "./FirstExample";

const MDEEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MDEEditors} parent={Editor} title={MDEEditors} />
      <Container fluid>
        <FirstExample />
      </Container>
    </>
  );
};

export default MDEEditorContainer;
