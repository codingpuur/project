import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import { Href, LinkColorInDarkTheme, PrimaryAlert } from "@/utils/Constant";
import LinkColorRight from "./LinkColorRight";
import CommonHeader from "@/Common/CommonHeader";
import { LinkColorData, alertColorData } from "@/Data/Uikits/Alert/AlertData";
import Link from "next/link";

const LinkColor = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonHeader title={LinkColorInDarkTheme} subTitle={LinkColorData} headClass='pb-0' />
        <CardBody>
          <Row>
            <Col xl={6}>
              <p className='mb-0'>{PrimaryAlert}</p>
              <Alert color='primary' className='dark'>
                <p>
                  This is a
                  <Link className='alert-link  text-white' href={Href}>
                    primary alert
                  </Link>
                  with an example link.Check it out.
                </p>
              </Alert>
              {alertColorData &&
                alertColorData.slice(0, 3).map((item, index) => (
                  <Fragment key={index}>
                    <p className='mb-0'>{item.title} Alert</p>
                    <Alert color={item.color} className='dark'>
                      <p>
                        This is a
                        <Link className='alert-link text-white' href={Href}>
                          {item.color} alert
                        </Link>
                        with an example link.Check it out.
                      </p>
                    </Alert>
                  </Fragment>
                ))}
            </Col>
            <LinkColorRight />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkColor;
