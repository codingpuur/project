import { Badge, Card, Col, Form, FormGroup, Input, Label, Media, Row } from "reactstrap";
import { DeliveryOptionHeading } from "@/utils/Constant";
import BuyingOption from "./BuyingOption";
import { verticalStyleFormData } from "@/Data/Form/FormControl/FormControlData";

const VerticalStyleForm = () => {
  return (
    <Form className='mega-vertical'>
      <Row>
        <Col sm={12}>
          <p className='mega-title m-b-5'>{DeliveryOptionHeading}</p>
        </Col>
        {verticalStyleFormData.map((data, index) => (
          <Col sm={6} key={index}>
            <Card>
              <Media className='p-20'>
                <FormGroup check className={`radio radio-${data.className} m-0 w-100`}>
                  <Input id={`VerticalStyleForm-${index}`} type='radio' name='radio5' />
                  <Label className='form-check-label mb-0 w-100' htmlFor={`VerticalStyleForm-${index}`}>
                    <Media body className='megaoption-space'>
                      <span className='mt-0 mega-title-badge'>
                        {data.deliveryType}
                        <Badge color={data.className} className={`pull-right digits`}>
                          {data.price}
                        </Badge>
                      </span>
                      <span>{data.text}</span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          </Col>
        ))}
        <BuyingOption />
      </Row>
    </Form>
  );
};

export default VerticalStyleForm;
