"use client";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Icons, WhetherIcons, WhetherIconsWithAnimations } from "@/utils/Constant";
import { weatherIconData } from "@/Data/Icons/weatherIconData";
import CommonHeader from "@/Common/CommonHeader";

const WhetherIcon = () => {
  return (
    <>
      <Breadcrumbs mainTitle={WhetherIcons} parent={Icons} title={WhetherIcons} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={WhetherIconsWithAnimations} subTitle={[]} headClass='pb-0' />
              <CardBody>
                <Row className='icon-lists whether-icon m-b-50'>
                  {weatherIconData &&
                    weatherIconData.map((item, index) => (
                      <Col lg={2} xs={3} key={index}>
                        {item.icon}
                      </Col>
                    ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhetherIcon;
