import {Button,Card,CardBody,Col,Form,FormGroup,Input,Row} from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { EMI, Submit } from "../../../../utils/Constant";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const EMIForm = () => {
  return (
    <Col xl={4} md={6} className="box-col-6">
      <Card>
        <CommonHeader title={EMI} />
        <CardBody>
          <Form className="theme-form">
            <Row>
              <Col xs={6} className="p-r-0">
                <FormGroup>
                  <Input type="text" placeholder="First Name" />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Input type="text" placeholder="Last name" />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className="p-r-0">
                  <Input type="text" placeholder="Pincode" />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Input type="select" size={1} defaultValue={"Bank Name"}>
                    <option>{"Bank Name"}</option>
                    <option>{"Sbi"}</option>
                    <option>{"Icici"}</option>
                    <option>{"Kotak"}</option>
                    <option>{"bob"}</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup>
                  <Input type="select" size={1} defaultValue={"Select Card"}>
                    <option>{"Select Card"}</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup>
                    <Input type="select" size={1} defaultValue={"Select Duration"}>
                        <option>{'Select Duration'}</option>
                        <option>2015-2016</option>
                        <option>2016-2017</option>
                        <option>2017-2018</option>
                        <option>2018-2019</option>
                    </Input>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <FormGroup>
                  <ul className="payment-opt flex-row">
                    <li>
                      <Image src={`${ImagePath}/ecommerce/mastercard.png`} alt="mastercard" width={34} height={20}/>
                    </li>
                    <li>
                      <Image src={`${ImagePath}/ecommerce/visa.png`} alt="visa" width={63} height={20}/>
                    </li>
                    <li>
                      <Image src={`${ImagePath}/ecommerce/paypal.png`} alt="paypal" width={78} height={20}/>
                    </li>
                  </ul>
                </FormGroup>
              </Col>
              <Col xs={12}>
                <Button color="primary" onClick={(e) => e.preventDefault()}>{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EMIForm;
