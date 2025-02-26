import { Col, FormGroup, Input, Label } from "reactstrap";
import { CashOnDeliveryHeading } from "@/utils/Constant";
import { PaymentMethodOptionPropsType } from "@/Types/FormLayoutTypes";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const CashOnDelivery: React.FC<PaymentMethodOptionPropsType> = ({ paymentMethodName, getUserData }) => {
  return (
    <Col xs={12}>
      <div className='card-wrapper border rounded-3 light-card'>
        <div>
          <FormGroup check className='radio radio-primary'>
            <Input id='shipping-choose7' type='radio' name='paymentMethodName' value='cashOnDelivery' checked={paymentMethodName === "cashOnDelivery"} onChange={getUserData} />
            <Label className='form-check-label mb-0 f-w-500' htmlFor='shipping-choose7'>
              {CashOnDeliveryHeading}
            </Label>
          </FormGroup>
          <p>{"After your order is delivered, make a cash payment"}</p>
        </div>
        <div>
          <Image src={`${ImagePath}/forms/delivery.png`} alt='delivery' width={75} height={50} />
        </div>
      </div>
    </Col>
  );
};

export default CashOnDelivery;
