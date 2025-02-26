"use client";
import { Col, Container, Row } from 'reactstrap'
import CommonRegisterForm from '../Common/CommonRegisterForm'
import Image from 'next/image'
import { ImagePath } from '@/Constant'

const RegisterWithBgImage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl={5} className="b-center bg-size p-0" >
          <Image className="bg-img-cover bg-center w-100 vh-100" src={`${ImagePath}/login/3.jpg`} alt="looginpage" height={927} width={770}/>
        </Col>
        <Col xl={7} className="p-0">
          <CommonRegisterForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterWithBgImage