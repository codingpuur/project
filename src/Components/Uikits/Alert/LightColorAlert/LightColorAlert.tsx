import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import { Href, LinkColorInLightTheme, PrimaryLightAlert } from "@/utils/Constant";
import LightColorRight from "./LightColorRight";
import CommonHeader from "@/Common/CommonHeader";
import { LightColorAlertData, alertColorData } from "@/Data/Uikits/Alert/AlertData";
import Link from "next/link";

const LightColorAlert = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonHeader title={LinkColorInLightTheme} subTitle={LightColorAlertData} headClass='pb-0' />
        <CardBody>
          <Row>
            <Col xl={6}>
              <p className='mb-0'>{PrimaryLightAlert}</p>
              <Alert color='primary' className='alert-light-primary border-0'>
                <p className='txt-primary'>
                  This is a
                  <Link className='alert-link  txt-primary' href={Href}>
                    primary alert
                  </Link>
                  with an example link.Check it out.
                </p>
              </Alert>
              {alertColorData &&
                alertColorData.slice(0, 3).map((item, index) => (
                  <Fragment key={index}>
                    <p className='mb-0'>{item.title} Alert</p>
                    <Alert color={item.color} className={`alert-light-${item.color} border-0`}>
                      <p className={`txt-${item.color}`}>
                        This is a
                        <Link className={`alert-link txt-${item.color}`} href={Href}>
                          {item.color} alert
                        </Link>
                        with an example link.Check it out.
                      </p>
                    </Alert>
                  </Fragment>
                ))}
            </Col>
            <LightColorRight />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightColorAlert;
