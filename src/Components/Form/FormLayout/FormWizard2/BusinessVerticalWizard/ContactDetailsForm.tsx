import { ChangeEvent, useState } from 'react';
import { Button, Col, Form, Input, Label } from 'reactstrap';
import { ContactDetails, Continue, Email, JoinOrganizationType, OrganizationDescription, OrganizationName, Previous } from '../../../../../utils/Constant';
import { BusinessFormCommonProps } from '@/Types/FormLayoutTypes';

const ContactDetailsForm:React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const [contactDetailsFormValues, setContactDetailsFormValue] = useState({organizationName: "",email: "",description: "",organizationType: "",});
  const { organizationName, email, description, organizationType } =
    contactDetailsFormValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setContactDetailsFormValue({ ...contactDetailsFormValues, [name]: value });
  };
  const handleNextButton = () => {
    if (organizationName !== "" &&email !== "" &&description !== "" &&organizationType !== "") {
      callbackActive(4);
    }
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="row g-3 needs-validation" noValidate>
      <Col xs={12} >
        <h3>{ContactDetails}</h3>
        <p>{"Please visit the documentation page if you require further information."}</p>
      </Col>
      <Col sm={6}>
        <Label >
          {OrganizationName}<span className="txt-danger">*</span>
        </Label>
        <Input type="text" placeholder="Gekko & Co." name="organizationName" value={organizationName} onChange={getUserData}/>
      </Col>
      <Col sm={6}>
        <Label >{Email}<span className="txt-danger">*</span></Label>
        <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={getUserData}/>
      </Col>
      <Col xs={12} >
        <Label >{JoinOrganizationType}<span className="txt-danger">*</span></Label>
        <Input type="select" value={organizationType} name="organizationType" onChange={getUserData} className="f-w-400 f-14 text-gray">
          <option>Join organization type</option>
          <option>Technology</option>
          <option>Culture</option>
          <option>NGO </option>
          <option>Environment</option>
          <option >Life cycle</option>
        </Input>
      </Col>
      <Col xs={12}>
        <Label>{OrganizationDescription}</Label>
        <Input type="textarea" value={description} name="description" onChange={getUserData} placeholder="Share your problems and another issues"/>
      </Col>
      <Col xs={12} className="text-end d-flex justify-content-end gap-2 align-center">
        <Button color="primary" onClick={() => callbackActive(2)}>{Previous}</Button>
        <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
      </Col>
    </Form>
  )
}

export default ContactDetailsForm