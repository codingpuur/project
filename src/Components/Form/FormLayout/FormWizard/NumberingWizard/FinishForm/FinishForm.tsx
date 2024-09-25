import { Col, Form, Row } from "reactstrap";
import { Congratulations, CongratulationsMessage } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const FinishForm = () => {
  return (
    <Form className='stepper-four needs-validation' noValidate>
      <Row className='g-3'>
        <Col xs={12} className='m-0'>
          <div className='successful-form'>
            <Image width={100} height={100} className='img-fluid' src={`${ImagePath}/gif/dashboard-8/successful.gif`} alt='successful' />
            <h3>{Congratulations}</h3>
            <p>{CongratulationsMessage}</p>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default FinishForm;
