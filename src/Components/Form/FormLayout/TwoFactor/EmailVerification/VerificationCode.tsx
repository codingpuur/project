import { Button, Col, Form, Input, Row } from 'reactstrap'
import { Call, Href, NotReceivedCode, OtpCode, Resend, VerificationCodeHeading, Verify } from '@/utils/Constant'
import Image from 'next/image'
import { ImagePath } from '@/Constant'
import { numbers } from '@/Data/Form/FormLayout/FormWizardData'
import Link from 'next/link'

const VerificationCode = () => {
  return (
    <Col md={6}>
      <div className="card-wrapper border rounded-3 h-100">
        <div className="authenticate">
          <h3>{VerificationCodeHeading}</h3>
          <Image width={180.44} height={183.5} className="img-fluid" src={`${ImagePath}/forms/authenticate.png`} alt="authenticate"/>
          <span>{"We've sent a verification code to"}</span>
          <span>+91********70</span>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row>
                <Col>
                    <h3>{OtpCode}</h3>
                </Col>
                <Col className="otp-generate">
                    {numbers.map((data) => (<Input key={data} className="code-input" type="number" />))}
                </Col>
                <Col>
                    <Button color="primary" className="w-100">{Verify}</Button>
                </Col>
                <div>
                    <span>{NotReceivedCode}</span>
                    <span>
                        <Link href={Href}>{Resend} </Link>{'OR'}
                        <Link href={Href}>{Call}</Link>
                    </span>
                </div>
            </Row>
          </Form>
        </div>
      </div>
    </Col>
  )
}

export default VerificationCode