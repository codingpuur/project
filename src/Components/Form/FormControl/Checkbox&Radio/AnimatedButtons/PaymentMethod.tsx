import { Col, Input, Label } from "reactstrap";
import { SelectPaymentMethod } from "@/utils/Constant";
import { Fragment } from "react";
import { paymentMethodName } from "@/Data/Form/FormControl/FormControlData";

const PaymentMethod = () => {
  return (
    <Col sm={6}>
      <div className='card-wrapper border rounded-3 checkbox-checked'>
        <h6 className='sub-title'>{SelectPaymentMethod}</h6>
        {paymentMethodName.map((data, index) => (
          <Fragment key={index}>
            <Label className='d-block' htmlFor={`edo-payment-${index}`} />
            <Input className='radio_animated' id={`edo-payment-${index}`} type='radio' name='rdo-ani' defaultChecked={data === "Paypal" ? true : false} />
            {data}
          </Fragment>
        ))}
      </div>
    </Col>
  );
};

export default PaymentMethod;
