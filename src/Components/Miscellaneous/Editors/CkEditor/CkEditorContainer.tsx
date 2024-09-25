"use client";
import { Container} from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { CkEditors, Editor } from "@/utils/Constant";
import InlineEditors from "./InlineEditors";
import CkEditorExample from "./CkEditorExample";

const CkEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CkEditors} parent={Editor} title={CkEditors} />
      <Container fluid>
        <CkEditorExample />
        <InlineEditors />
      </Container>
    </>
  );
};

export default CkEditorContainer;
