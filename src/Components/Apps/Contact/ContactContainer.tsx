"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, Contacts } from "@/utils/Constant";
import { useCallback, useState } from "react";
import ContactSideBar from "./ContactSideBar/ContactSideBar";
import TabComponent from "./TabComponent/TabComponent";
import { ToastContainer } from "react-toastify";

const ContactContainer = () => {
  const [activeTab, setActiveTab] = useState("2");
  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={Contacts} parent={Apps} title={Contacts} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl={3} className="box-col-3">
              <ContactSideBar callback={callback} />
            </Col>
            <Col xl={9} md={12} className="box-col-80">
              <TabComponent activeTab={activeTab} />
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </Container>
    </>
  );
};

export default ContactContainer;
