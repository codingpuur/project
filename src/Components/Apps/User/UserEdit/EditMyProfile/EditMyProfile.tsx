import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { AboutMe, Emailaddress, MyProfile, Password, Save, Website } from "@/utils/Constant";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const EditMyProfile = () => {
  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={MyProfile} headClass='card-title mb-0 pb-0' />
        <CardBody>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row className='mb-2'>
              <div className='col-auto'>
                <Image width={70} height={70} className='img-70 rounded-circle' alt='edit-user' src={`${ImagePath}/user/7.jpg`} />
              </div>
              <Col>
                <h3 className='mb-1'>{"MARK JECNO"}</h3>
                <p className='mb-4'>{"DESIGNER"}</p>
              </Col>
            </Row>
            <FormGroup>
              <h6 className='form-label'>{AboutMe}</h6>
              <textarea rows={5} className='form-control' defaultValue={"On the other hand, we denounce with righteous indignation"} />
            </FormGroup>
            <FormGroup>
              <Label>{Emailaddress}</Label>
              <Input placeholder='your-email@domain.com' />
            </FormGroup>
            <FormGroup>
              <Label>{Password}</Label>
              <Input type='password' defaultValue='password' />
            </FormGroup>
            <FormGroup>
              <Label>{Website}</Label>
              <Input placeholder='http://Uplor.com' />
            </FormGroup>
            <div className='form-footer'>
              <Button color='primary' className='d-block'>
                {Save}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditMyProfile;
