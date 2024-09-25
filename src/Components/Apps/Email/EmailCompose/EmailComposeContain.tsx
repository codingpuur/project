import { Card, Col, Row } from "reactstrap";
import EmailTop from "../EmailApp/EmailApplicationContain/EmailTop";
import EmailComposeHeader from "./EmailComposeHeader";
import ReadEmailList from "../EmailApp/EmailApplicationContain/ReadEmailList";

const EmailComposeContain = () => {
  return (
    <div className='email-right-aside'>
      <Card className='email-body'>
        <Row>
          <Col xl={4} md={12} className='box-md-12 pr-0'>
            <div className='pe-0'></div>
            <EmailTop />
            <ReadEmailList
              activeCallback={function (tab: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
          <Col xl={8} md={12} className='box-md-12 pr-0'>
            <EmailComposeHeader />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default EmailComposeContain;
