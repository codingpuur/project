import { useState } from "react";
import { Button, Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label } from "reactstrap";
import { Dropdownform, Emailaddress, Password, Rememberme, Signin } from "@/utils/Constant";

const DropdownForm = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className='btn-group'>
      <Dropdown isOpen={open} toggle={toggle} direction='down'>
        <DropdownToggle color='secondary'>{Dropdownform}</DropdownToggle>
        <DropdownMenu className='dropdown-content'>
          <Form className='p-4 form-wrapper dark-form'>
            <FormGroup>
              <Label htmlFor='exampleDropdownFormEmail2'>{Emailaddress}</Label>
              <Input id='exampleDropdownFormEmail2' type='email' placeholder='email@example.com' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='exampleDropdownFormPassword2'>{Password}</Label>
              <Input id='exampleDropdownFormPassword2' type='password' placeholder='Password' />
            </FormGroup>
            <FormGroup>
              <div className='form-check'>
                <Input className='form-check-input' id='dropdownCheck2' type='checkbox' />
                <Label className='form-check-label' htmlFor='dropdownCheck2'>
                  {Rememberme}
                </Label>
              </div>
            </FormGroup>
            <Button color='dark' type='submit' onClick={toggle}>
              {Signin}
            </Button>
          </Form>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownForm;
