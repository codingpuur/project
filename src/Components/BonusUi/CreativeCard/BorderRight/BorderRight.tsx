import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderRightText, BorderRights, Emailaddress } from "@/utils/Constant";
import { BorderRightData } from "@/Data/BonusUi/CreativeCard/CreativeCardData";

const BorderRight = () => {
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderRights} subTitle={BorderRightData} headClass="border-r-secondary pb-0"/>
        <CardBody>
          <p>{BorderRightText}</p>
          <Form>
            <Label htmlFor="exampleFormControlInput1">
              {Emailaddress}
            </Label>
            <Input id="exampleFormControlInput1" type="email" placeholder="youremail@gmail.com" />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;
