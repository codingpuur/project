import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AboveInformationCorrect, CVVNumber, CardHolder, CardNumber, Expiration, UploadDocumentation } from "@/utils/Constant";

const CreditCardForm = () => {
  return (
    <Form className='needs-validation' noValidate>
      <Row className='g-3'>
        <Col md={12}>
          <Label>{CardHolder}</Label>
          <Input type='text' required placeholder='Enter card holder name' />
        </Col>
        <Col md={4}>
          <Label>{CardNumber}</Label>
          <Input type='text' required placeholder='xxxx xxxx xxxx xxxx' />
          <div className='invalid-feedback'>Please enter your valid number</div>
        </Col>
        <Col md={4}>
          <Label>{Expiration}</Label>
          <Input type='number' required placeholder='xx/xx' />
        </Col>
        <Col md={4}>
          <Label>{CVVNumber}</Label>
          <Input type='text' required />
        </Col>
        <Col xs={12}>
          <Label>{UploadDocumentation}</Label>
          <Input type='file' required />
        </Col>
        <Col xs={12}>
          <FormGroup check>
            <Input id='invalidCheck-c' type='checkbox' required />
            <Label className='form-check-label' htmlFor='invalidCheck-c'>
              {AboveInformationCorrect}
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default CreditCardForm;
