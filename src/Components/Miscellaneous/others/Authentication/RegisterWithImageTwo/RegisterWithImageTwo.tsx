"use client";
import { Col, Container, Row } from 'reactstrap'
import CommonRegisterForm from '../Common/CommonRegisterForm'
import Image from 'next/image'
import { ImagePath } from '@/Constant'

const RegisterWithImageTwo = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl={7} className="p-0 b-center bg-size" >
          <Image className="bg-img-cover bg-center w-100 vh-100" src={`${ImagePath}/login/1.jpg`} alt="looginpage" height={930} width={1090}/>
        </Col>
        <Col xl={5} className="p-0">
          <CommonRegisterForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterWithImageTwo