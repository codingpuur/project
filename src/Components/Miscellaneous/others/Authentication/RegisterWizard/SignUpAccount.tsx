"use client";
import { FormGroup, Input, Label } from 'reactstrap';
import { ContactNo, EmailPassWord, FirstName, LastName, SignUpToAccount } from '@/utils/Constant';
import { RegisterWizardForm } from '@/Types/MiscellaneousTypes';

const SignUpAccount:React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { contactNumber, lastName, firstName } = formValue;
  return (
    <div className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h3 className="text-muted mb-4">{EmailPassWord}</h3>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup>
            <Label>{FirstName}</Label>
            <Input value={firstName} name="firstName" onChange={getUserData} id="name" type="text" placeholder="Johan"/>
          </FormGroup>
          <FormGroup>
            <Label >{LastName}</Label>
            <Input value={lastName} name="lastName" onChange={getUserData} type="text" placeholder="Deo"/>
          </FormGroup>
          <FormGroup>
            <Label>{ContactNo}</Label>
            <Input value={contactNumber} name="contactNumber" onChange={getUserData} type="number" placeholder={"123456789"}/>
          </FormGroup>
        </div>
      </div>
    </div>
  )
}

export default SignUpAccount