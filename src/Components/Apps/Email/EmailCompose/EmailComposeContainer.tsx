"use client";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { EmailComposes, Emails } from "@/utils/Constant";
import MailSidebar from "../EmailApp/MailSidebar/MailSidebar";
import EmailComposeContain from "./EmailComposeContain";

const EmailComposeContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EmailComposes} parent={Emails} title={EmailComposes} />
      <Container fluid>
        <div className="email-wrap emailapp-items">
          <Row>
            <Col xl={3} className="box-col-30">
              <MailSidebar path={"emailapp"}/>
            </Col>
            <Col xl={9} className="box-col-80">
              <EmailComposeContain />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EmailComposeContainer;
