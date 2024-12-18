import { Col, Container, Row } from "reactstrap";
import CommonForm from "../Common/CommonForm";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const LoginWithImageTwo = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={5} className='b-center bg-size p-0'>
          <Image className='bg-img-cover bg-center w-100 vh-100' src={`${ImagePath}/login/3.jpg`} alt='looginpage' height={927} width={770}/>
        </Col>
        <Col xl={7} className='p-0'>
          <CommonForm alignLogo='text-start' />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWithImageTwo;
