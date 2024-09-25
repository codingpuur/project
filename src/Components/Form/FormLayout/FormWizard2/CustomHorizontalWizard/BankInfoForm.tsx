import { ChangeEvent, useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { AadhaarNumber, ChooseBanks, Continue, PAN, Previous } from '@/utils/Constant';
import { BusinessFormCommonProps } from '@/Types/FormLayoutTypes';
import { popularBanksList } from '@/Data/Form/FormLayout/FormWizardData';
import Image from 'next/image';
import { ImagePath } from '@/Constant';

const BankInfoForm:React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const [bankDetailsForm, setBankDetailsForm] = useState({aadhaarNumber: "",panNumber: "",bankName: "",});
  const { aadhaarNumber, panNumber, bankName } = bankDetailsForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setBankDetailsForm({ ...bankDetailsForm, [name]: value });
  };

  const handleNextButton = () => {
    if (aadhaarNumber !== "" && panNumber !== "" && bankName !== "") {
      callbackActive(3);
    } 
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className='g-3'>
        <Col sm={6} className="bank-search">
          <Label>{AadhaarNumber}<span className="txt-danger">*</span></Label>
          <Input value={aadhaarNumber} name="aadhaarNumber" onChange={getUserData} type="search" placeholder="xxxx xxxx xxxx xxxx"/>
        </Col>
        <Col sm={6} className="bank-search">
          <Label>{PAN}<span className="txt-danger">*</span></Label>
          <Input type="search" placeholder="xxxxxxxxxx" value={panNumber} name="panNumber" onChange={getUserData}/>
        </Col>
        <Col xs={12}>
          <h3>{ChooseBanks}</h3>
          <div className="bank-selection">
            <FormGroup check className="radio radio-primary ps-0">
              <ul className="radio-wrapper flex-row">
                {popularBanksList.map((data, index) => (
                  <li key={index}>
                    <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} checked={bankName === data.bankName} onChange={getUserData}/>
                    <Label className="form-check-label" htmlFor={data.bankName}>
                      <Image width={100} height={50} src={`${ImagePath}/forms/${data.imageName}`} alt="HDFC"/>
                      <span>{data.bankName}</span>
                    </Label>
                  </li>
                ))}
              </ul>
            </FormGroup>
          </div>
        </Col>
        <Col xs={12} className="text-end d-flex justify-content-end gap-2 align-center">
          <Button color="primary" onClick={() => callbackActive(1)}>{Previous}</Button>
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default BankInfoForm