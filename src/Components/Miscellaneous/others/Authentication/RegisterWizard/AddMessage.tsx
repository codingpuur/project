"use client";
import { FormGroup, Input, Label } from "reactstrap";
import { Age, Birthday, EmailPassWord, HavePassport, SignUpToAccount } from "@/utils/Constant";
import { RegisterWizardForm } from "@/Types/MiscellaneousTypes";

const AddMessage: React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { birthDate, age, passPort } = formValue;
  return (
    <div id='step-3' className='content'>
      <div className='wizard-title'>
        <h2>{SignUpToAccount}</h2>
        <h3 className='text-muted mb-4'>{EmailPassWord}</h3>
      </div>
      <div className='login-main'>
        <div className='theme-form'>
          <FormGroup>
            <Label>{Birthday}</Label>
            <Input type='date' onChange={getUserData} value={birthDate} name='birthDate' />
          </FormGroup>
          <FormGroup>
            <Label className='control-label'>{Age}</Label>
            <Input placeholder='Age' type='text' onChange={getUserData} value={age} name='age' />
          </FormGroup>
          <FormGroup>
            <Label className='control-label'>{HavePassport}</Label>
            <Input placeholder='Yes/No' type='text' onChange={getUserData} value={passPort} name='passPort' />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddMessage;
