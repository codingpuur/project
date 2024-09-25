"use client";
import { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { EnterYourPassword, HaveAccount, RememberPassword, SignIn, Unlock } from '@/utils/Constant';
import Link from 'next/link';
import Image from 'next/image';
import { ImagePath } from '@/Constant';

const UnlockUser = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="page-wrapper">
      <Container fluid className="p-0">
        <div className="authentication-main mt-0">
          <Row>
            <Col xs={12}>
              <div className="login-card login-dark">
                <div>
                  <div>
                    <Link className="logo" href={`/dashboards/shoppingplace`}>
                      <Image width={121} height={35} className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="looginpage"/>
                      <Image width={121} height={35} className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="looginpage"/>
                    </Link>
                  </div>
                  <div className="login-main">
                    <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
                      <h4>{Unlock}</h4>
                      <FormGroup>
                        <Label className="col-form-label">{EnterYourPassword}</Label>
                        <div className="form-input position-relative">
                        <Input type={showPassWord ? "text" : "password"} placeholder="*********" />
                          <div className="show-hide">
                            <span onClick={() => setShowPassWord(!showPassWord)}className={!showPassWord ? "show" : ""} />
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <div className="checkbox p-0">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Button color="primary" block className="sw-100">{Unlock}</Button>
                      </FormGroup>
                      <p className="mt-4 mb-0">{HaveAccount}
                        <Link className="ms-2" href={`/pages/authentication/loginsimple`}>{SignIn}</Link>
                      </p>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default UnlockUser