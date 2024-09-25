"use client";
import { FormGroup, Input, Label } from "reactstrap";
import { City, Country, EmailPassWord, SignUpToAccount, State } from "@/utils/Constant";
import { RegisterWizardForm } from "@/Types/MiscellaneousTypes";

const FormDone: React.FC<RegisterWizardForm> = ({ formValue, getUserData }) => {
  const { country, state, city } = formValue;
  return (
    <div className='content'>
      <div className='wizard-title'>
        <h2>{SignUpToAccount}</h2>
        <h3 className='text-muted mb-4'>{EmailPassWord}</h3>
      </div>
      <div className='login-main'>
        <div className='theme-form'>
          <FormGroup>
            <Label className='control-label'>{Country}</Label>
            <Input className='mt-1' value={country} onChange={getUserData} name='country' type='text' placeholder='Country' />
          </FormGroup>
          <FormGroup>
            <Label className='control-label'>{State}</Label>
            <Input className='mt-1' value={state} onChange={getUserData} name='state' type='text' placeholder='State' />
          </FormGroup>
          <FormGroup>
            <Label className='control-label'>{City}</Label>
            <Input value={city} onChange={getUserData} name='city' className='mt-1' type='text' placeholder='City' />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default FormDone;
