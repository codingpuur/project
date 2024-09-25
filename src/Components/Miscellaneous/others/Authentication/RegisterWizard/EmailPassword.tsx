"use client";
import { FormGroup, Input, Label } from "reactstrap";
import { ConfirmPassword, EmailAddress, EmailPassWord, Password, SignUpToAccount } from "@/utils/Constant";
import { RegisterWizardForm } from "@/Types/MiscellaneousTypes";

const EmailPassword: React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { email, password, confirmPassword } = formValue;
  return (
    <div id='step-2' className='content'>
      <div className='wizard-title'>
        <h2>{SignUpToAccount}</h2>
        <h3 className='text-muted mb-4'>{EmailPassWord}</h3>
      </div>
      <div className='login-main'>
        <div className='theme-form'>
          <FormGroup className='m-t-15'>
            <Label>{EmailAddress}</Label>
            <Input name='email' onChange={getUserData} value={email} type='email' placeholder='name@example.com' />
          </FormGroup>
          <FormGroup>
            <Label>{Password}</Label>
            <Input name='password' onChange={getUserData} value={password} type='password' placeholder='Password' />
          </FormGroup>
          <FormGroup>
            <Label>{ConfirmPassword}</Label>
            <Input name='confirmPassword' onChange={getUserData} value={confirmPassword} type='password' placeholder='Enter again' />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EmailPassword;
