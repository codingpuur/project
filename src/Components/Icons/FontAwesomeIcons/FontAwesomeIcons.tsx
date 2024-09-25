"use client";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { FontAwesomeIcon, Icons } from "@/utils/Constant";
import { fontAwesomeIcons } from "@/Data/Icons/FontAwesomeData";
import { Fragment, useState } from "react";
import IconBottom from "../IconBottom";

const FontAwesomeIcons = () => {
    const [iTag, setITag] = useState<string>('')
    const [icon, setIcon] = useState<string>('')
    const handleClick = (item:string) => {
        setITag('<i className="fa fa-' + item + '"></i>');
        setIcon('fa fa-' + item + ' fa-2x');
    }
  return (
    <>
      <Breadcrumbs mainTitle={FontAwesomeIcon} parent={Icons} title={FontAwesomeIcon}/>
      <Container fluid={true}>
        <Row>
          {fontAwesomeIcons.map((data,index) => (
            <Col sm={12} key={index}>
                <Card>
                    <Fragment>
                        <CardHeader className="pb-0">
                            <h3 className="m-b-0">
                                <span className="digits">{data.title}</span> {Icons}
                            </h3>
                        </CardHeader>
                        <CardBody>
                            <Row className="icon-lists">
                            {data.icons.map((icon, i) => {
                                return (
                                <Col sm={6} md={4} xl={3} key={i} onClick={()=>handleClick(icon)}>
                                    <i className={`fa fa-${icon}`}></i> {"fa fa-"}
                                    {icon}
                                </Col>
                                );
                            })}
                            </Row>
                        </CardBody>
                    </Fragment>
                </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <IconBottom iTag={iTag} icon={icon}/>
    </>
  );
};

export default FontAwesomeIcons;
