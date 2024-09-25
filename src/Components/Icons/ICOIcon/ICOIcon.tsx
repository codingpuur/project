"use client";
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '@/CommonElements/Breadcrumbs/Breadcrumbs'
import { ICOIcons, Icons } from '@/utils/Constant'
import { icoIconsData } from '@/Data/Icons/ICOIconData'
import { useState } from 'react'
import IconBottom from '../IconBottom'

const ICOIcon = () => {
    const [iTag, setITag] = useState<string>('')
    const [icon, setIcon] = useState<string>('')
    const getItag = (item:string) => {
        setITag('<i className="icofont icofont-' + item + '"></i>');
        setIcon('icofont icofont-' + item + ' fa-2x');
    }
  return (
    <>
        <Breadcrumbs mainTitle={ICOIcons} parent={Icons} title={ICOIcons}/>
        <Container fluid>
            <Row>
                {icoIconsData.map((data,i)=>(
                    <Col sm={12} key={i}>
                        <Card>
                            <CardHeader className='pb-0'>
                                <h3 className="m-b-0">
                                    <span className="digits">{data.title}</span> {Icons}
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <Row className="icon-lists">
                                    {data.icons.map((iconItem, i) => {
                                        return (
                                            <Col sm={6} lg={4} key={i} onClick={() => getItag(iconItem)}>
                                                <i className={`icofont icofont-${iconItem}`}></i> {iconItem}
                                            </Col>
                                        )
                                    })
                                    }
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        <IconBottom iTag={iTag} icon={icon}/>
    </>
  )
}

export default ICOIcon