"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { EmailApps, Emails } from "@/utils/Constant";
import MailSidebar from "./MailSidebar/MailSidebar";
import EmailApplicationContain from "./EmailApplicationContain/EmailApplicationContain";
import { useCallback, useState } from "react";

const EmailAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeCallback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={EmailApps} parent={Emails} title={EmailApps} />
      <Container fluid>
        <div className="email-wrap emailapp-items">
          <Row>
            <Col xl={3} className="box-col-30">
              <MailSidebar path={"emailcompose"}/>
            </Col>
            <Col xl={9} className="box-col-80">
              <EmailApplicationContain activeTab={activeTab} activeCallback={activeCallback} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EmailAppContainer;
