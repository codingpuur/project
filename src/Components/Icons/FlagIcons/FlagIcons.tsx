"use client";
import { Card, CardBody, Col, Container, Media, Row } from "reactstrap";
import Breadcrumbs from "@/CommonElements/Breadcrumbs/Breadcrumbs";
import { FlagIcon, Icons } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import IconBottom from "../IconBottom";
import { useState } from "react";
import { flagIconsData } from "@/Data/Icons/FlagIconsData";

const FlagIcons = () => {
    const [iTag, setITag] = useState<string>('')
    const [icon, setIcon] = useState<string>('')
    const handleClick = (item:string) => {
        setITag('<i className="flag-icon flag-icon-' + item + '"></i>');
        setIcon('flag-icon flag-icon-' + item);
    }
  return (
    <>
      <Breadcrumbs mainTitle={FlagIcon} parent={Icons} title={FlagIcon} />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={FlagIcon} subTitle={[]} headClass="pb-0" />
              <CardBody>
                <Row className="icon-lists flag-icons">
                  {flagIconsData &&
                    flagIconsData.map((icon, i) => {
                      return (
                        <Col sm={6} xs={12} xl={4} key={i}>
                          <div className="d-flex" onClick={()=>handleClick(icon.abbrivation)}>
                            <i className={`flag-icon flag-icon-${icon.abbrivation}`} ></i>
                            <Media body className="align-self-center flex-grow-1">
                              <h5>{icon.abbrivation}</h5>
                              <h6 className="mt-0">{icon.name}</h6>
                            </Media>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconBottom iTag={iTag} icon={icon} />
    </>
  );
};

export default FlagIcons;
