"use client";
import { Container, Row, TabContent, TabPane } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, SocialAppHeading } from "@/utils/Constant";
import UserProfile from "./UserProfile/UserProfile";
import { useCallback, useState } from "react";
import TimelineTab from "./TimelineTab/TimelineTab";
import AboutTab from "./AboutTab/AboutTab";
import AllCards from "./AllCards/AllCards";
import PhotosTab from "./PhotosTab/PhotosTab";

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={SocialAppHeading} title={SocialAppHeading} parent={Apps}/>
      <Container fluid>
        <div className="user-profile social-app-profile">
          <UserProfile callback={callback} />
          <TabContent activeTab={activeTab}>
            <TabPane tabId={1}>
              <TimelineTab />
            </TabPane>
            <TabPane tabId={2}>
              <AboutTab />
            </TabPane>
            <TabPane tabId={3}>
              <Row>
                <AllCards />
              </Row>
            </TabPane>
            <TabPane tabId={4}>
              <Row>
                <PhotosTab />
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </>
  );
};

export default SocialAppContainer;
