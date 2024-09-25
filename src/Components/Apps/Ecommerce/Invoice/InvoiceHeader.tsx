import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const InvoiceHeader = () => {
  return (
    <Row>
      <Col sm={12}>
        <div className="d-flex">
          <div className="media-left">
            <Image className="media-object img-80 img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" height={29} width={80}/>
            <Image className="media-object img-80 img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" width={38} height={42}/>
          </div>
          <div className="flex-grow-1 m-l-20 text-right">
            <h3 className="media-heading">{'Cion'}</h3>
            <p>
              hello@Cion.in
              <br />
              <span>289-335-6503</span>
            </p>
          </div>
        </div>
      </Col>
      <Col sm={12}>
        <div className="text-md-end text-xs-center">
          <h3>Invoice #<span className="counter">1069</span></h3>
          <p>
            Issued: May<span> 27, 2023</span>
            <br />
            Payment Due: June <span>27, 2023</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default InvoiceHeader;
