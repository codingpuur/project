"use client";
import { Col, Container, Row } from 'reactstrap'
import CommonForm from '../Common/CommonForm'
import Image from 'next/image'
import { ImagePath } from '@/Constant'

const LoginWithBackGroundImage = () => {
  return (
    <Container fluid> 
      <Row>
        <Col xl={7} className="b-center bg-size p-0">
          <Image className="bg-img-cover bg-center w-100 vh-100" src={`${ImagePath}/login/2.jpg`} alt="looginpage" height={930} width={1090}/>
        </Col>
        <Col xl={5} className="p-0">
          <CommonForm alignLogo="text-start" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithBackGroundImage