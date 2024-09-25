"use client";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { Icons, ThemifyIcons } from "@/utils/Constant";
import { themifyIconsData } from "@/Data/Icons/ThemifyIconsData";
import { useState } from "react";
import IconBottom from "../IconBottom";

const ThemifyIcon = () => {
  const [iTag, setITag] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const getItag = (item: string) => {
    setITag('<i className= "' + item + '"></i>');
    setIcon("" + item + " fa-2x");
  };
  return (
    <>
      <Breadcrumbs mainTitle={ThemifyIcons} parent={Icons} title={ThemifyIcons} />
      <Container fluid>
        <Row>
          {themifyIconsData.map((data, index) => (
            <Col sm={12} key={index}>
              <Card>
                <CardHeader>
                  <h3 className='m-b-0'>
                    <span className='digits'>{data.title}</span> {Icons}
                  </h3>
                </CardHeader>
                <CardBody>
                  <Row className='icon-lists'>
                    {data.icons.map((icon, i) => {
                      return (
                        <Col sm={6} lg={4} key={i} onClick={() => getItag(icon)}>
                          <i className={`${icon}`}></i> {icon}
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <IconBottom iTag={iTag} icon={icon} />
    </>
  );
};

export default ThemifyIcon;
