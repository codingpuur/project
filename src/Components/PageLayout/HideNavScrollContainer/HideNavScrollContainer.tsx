"use client";
import { useEffect } from "react";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { OnScrollHideMenu, PageLayout, SampleCard } from "@/utils/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { HideNavScrollData, menuOnScroll } from "@/Data/PageLayout/PageLayoutData";
import { usePathname } from "next/navigation";
import { setScrollMenu } from "@/Redux/Reducer/LayoutSlice";
import { useAppDispatch } from "@/Redux/Hooks";

const HideNavScrollContainer = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const hideMenu = pathname === `/pagelayout/hidenavscroll`;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30 && hideMenu) dispatch(setScrollMenu(true));
      else dispatch(setScrollMenu(false));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch, hideMenu]);

  return (
    <>
      <Breadcrumbs mainTitle={OnScrollHideMenu} parent={PageLayout} title={OnScrollHideMenu} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={SampleCard} subTitle={HideNavScrollData} />
              <CardBody>
                {menuOnScroll.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HideNavScrollContainer;
