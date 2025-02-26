import { ChangeEvent, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AgreeToTermsAndConditions, CVVNumber, CardHolder, CardNumber, Continue, Expiration, Previous } from '@/utils/Constant';
import { BusinessFormCommonProps } from '@/Types/FormLayoutTypes';
import { listOfYears } from '@/Data/Form/FormLayout/FormWizardData';

const PayDetailsForm:React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const [payDetailsFormValues, setPayDetailsFormValues] = useState({cardHolderName: "",cardNumber: "",expiryDate: "",expiryYear: "",cvvNumber: "",});
  const { cardHolderName, cardNumber, expiryDate, expiryYear, cvvNumber } =payDetailsFormValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setPayDetailsFormValues({ ...payDetailsFormValues, [name]: value });
  };

  const handleNextButton = () => {
    if (cardHolderName !== "" &&cardNumber !== "" &&expiryDate !== "" &&expiryYear !== "" &&cvvNumber !== "") {
      callbackActive(5);
    }  
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="row g-3 needs-validation" noValidate>
      <Row className='g-3'>
        <Col md={6}>
          <Label>{CardHolder}</Label>
          <Input value={cardHolderName} name="cardHolderName" onChange={getUserData} type="text"/>
        </Col>
        <Col md={6}>
          <Label>{CardNumber}</Label>
          <Input value={cardNumber} name="cardNumber" onChange={getUserData} type="text" placeholder="xxxx xxxx xxxx xxxx"/>
        </Col>
        <Col xs={12}>
          <Row className="g-3">
            <Col md={6}>
              <Label>{Expiration}</Label>
              <Row className="g-3">
                <Col md={6}>
                  <Input id="expiration" type="number" required placeholder="xx/xx" value={expiryDate} name="expiryDate" onChange={getUserData}/>
                </Col>
                <Col md={6}>
                  <Input value={expiryYear} name="expiryYear" type="select" onChange={getUserData} className="f-w-400 f-14 text-gray">
                    <option value={""}>Year</option>
                    {listOfYears.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                  </Input>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Label>{CVVNumber}</Label>
              <Input type="text" required value={cvvNumber} name="cvvNumber" onChange={getUserData}/>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <FormGroup check className="mb-0">
            <Input id="invalidCheckboxWizard" type="checkbox" />
            <Label className="form-check-label mb-0" htmlFor="invalidCheckboxWizard">{AgreeToTermsAndConditions}</Label>
          </FormGroup>
        </Col>
        <Col xs={12} className="text-end d-flex justify-content-end gap-2 align-center">
          <Button color="primary" onClick={() => callbackActive(3)}>{Previous}</Button>
          <Button color="primary" onClick={handleNextButton}>
            {Continue}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default PayDetailsForm