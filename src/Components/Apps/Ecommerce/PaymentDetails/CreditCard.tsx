import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Creditcards } from "@/utils/Constant";
import CreditCardForm from "./CreditCardForm";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const CreditCard = () => {
  return (
    <Col xl={8} className='box-col-80'>
      <Card>
        <CommonHeader title={Creditcards} headClass='py-4' />
        <CardBody>
          <Row>
            <Col md={7} className='order-md-0 order-1'>
              <CreditCardForm />
            </Col>
            <Col md={5} className='text-center'>
              <Image className='img-fluid' src={`${ImagePath}/ecommerce/card.png`} alt='card' height={235} width={352} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreditCard;
