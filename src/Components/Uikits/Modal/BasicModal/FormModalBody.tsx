import { Button, Col, Form, Input, Label, ModalBody, Row } from "reactstrap";
import { Checktext,Emailaddress, FirstName, Lastname, Looksgood, SignUp} from "@/utils/Constant";

const FormModalBody = () => {
  return (
    <ModalBody>
      <Form className="needs-validation">
        <Row className="g-3">
          <Col md={6}>
            <Label htmlFor="validationCustom01">
              {FirstName}
            </Label>
            <Input
              id="validationCustom01"
              type="text"
              placeholder="Enter your first-name"
              required={true}
            />
            <div className="valid-feedback">{Looksgood}</div>
          </Col>
          <Col md={6}>
            <Label htmlFor="validationCustom02">
              {Lastname}
            </Label>
            <Input
              id="validationCustom02"
              type="text"
              placeholder="Enter your last-name"
              required={true}
            />
            <div className="valid-feedback">{Looksgood}</div>
          </Col>
          <Col md={12}>
            <div className="mb-3">
              <Label htmlFor="exampleFormControlInput1">
                {Emailaddress}
              </Label>
              <Input
                id="exampleFormControlInput1"
                type="email"
                placeholder="Ciontheme@gmail.com"
              />
            </div>
          </Col>
          <Col md={12}>
            <div className="form-check mb-3">
              <Input
                className="form-check-input"
                id="flexCheckDefault"
                type="checkbox"
              />
              <Label className="form-check-label" htmlFor="flexCheckDefault">
                {Checktext}
              </Label>
            </div>
            <Button color="primary" type="submit">
              {SignUp}
            </Button>
          </Col>
          </Row>
      </Form>
    </ModalBody>
  );
};

export default FormModalBody;
