import { Col, FormGroup, Label, Row } from "reactstrap";
import { ClientName, ProjectTitle } from "@/utils/Constant";
import { ErrorMessage, Field } from "formik";

const TitleAndClentSection = () => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ProjectTitle}</Label>
            <Field name='title' type='text' className='form-control' placeholder={"Project name *"} />
            <ErrorMessage name='title' component='span' className='text-danger' />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ClientName}</Label>
            <Field name='client' className='form-control' type='text' placeholder={"Name client or company name"} />
            <ErrorMessage name='client' component='span' className='text-danger' />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default TitleAndClentSection;
