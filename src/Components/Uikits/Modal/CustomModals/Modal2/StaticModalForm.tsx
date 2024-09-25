import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { Checkmeout, Email, Password, Signin } from "@/utils/Constant";
import { TogglePropsType } from "@/Types/ModelTypes";
 
const StaticModalForm: React.FC<TogglePropsType> = ({ toggle }) => {
  return (
    <Form>
      <Row className='g-3'>
        <Col md={12}>
          <Label htmlFor='inputEmail4'>{Email}</Label>
          <Input id='inputEmail4' type='email' placeholder='Enter Your Email' />
        </Col>
        <Col md={12}>
          <Label htmlFor='inputPassword4'>{Password}</Label>
          <Input id='inputPassword4' type='password' placeholder='Enter Your Password' />
        </Col>
        <Col md={12}>
          <div className='form-check'>
            <Input className='form-check-input' id='gridCheck' type='checkbox' />
            <Label className='form-check-label' htmlFor='gridCheck'>
              {Checkmeout}
            </Label>
          </div>
        </Col>
        <Col md={12}>
          <Button color='primary' type='submit' onClick={toggle}>
            {Signin}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default StaticModalForm;
