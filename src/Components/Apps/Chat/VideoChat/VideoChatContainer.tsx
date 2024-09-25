"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Chat, VideoChats } from "@/utils/Constant";
import ChatStatus from "./ChatStatus/ChatStatus";
import VideoCallPage from "./VideoCallPage/VideoCallPage";
import ChatMenu from "./ChatMenu/ChatMenu";

const VideoChatContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={VideoChats} title={VideoChats} parent={Chat} />
      <Container fluid>
        <Row>
          <Col sm={12} className="call-chat-sidebar">
            <Card>
              <CardBody className="chat-body">
                <ChatStatus />
              </CardBody>
            </Card>
          </Col>
          <Col className="call-chat-body">
            <Card>
              <CardBody className="p-0">
                <Row className="chat-box">
                  <VideoCallPage />
                  <ChatMenu />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoChatContainer;
