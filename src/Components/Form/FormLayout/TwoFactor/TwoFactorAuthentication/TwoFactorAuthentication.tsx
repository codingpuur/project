import { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap';
import { FactorAuthentication, TwoFactorAuthenticationHeading } from '@/utils/Constant';
import ModalOne from './ModalOne';
import { ImagePath } from '@/Constant';
import Image from 'next/image';

const TwoFactorAuthentication = () => {
    const [modalOne, setModalOne] = useState(false);
    const toggle = () => setModalOne(!modalOne);
    return (
      <Col sm={12}>
        <Card>
          <CardBody className="authentication-body">
            <div className="authentication-wrapper">
              <h3>{TwoFactorAuthenticationHeading}</h3>
              <p>{"Click on the authentication button below and scan the QR code"}</p>
              <Image width={406} height={345} src={`${ImagePath}/forms/qr-scan.png`} alt="qr-scan"/>
            </div>
            <Button color='primary' className="mt-5" onClick={toggle}>{FactorAuthentication}</Button>
            <ModalOne toggle={toggle} modalOne={modalOne} />
          </CardBody>
        </Card>
      </Col>
    );
}

export default TwoFactorAuthentication