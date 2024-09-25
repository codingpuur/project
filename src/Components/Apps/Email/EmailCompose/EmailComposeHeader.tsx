import { Button, Col, Row } from "reactstrap";
import { NewMessage, Send } from "@/utils/Constant";
import EmailComposeForm from "./EmailComposeForm";

const EmailComposeHeader = () => {
  return (
    <div className='email-right-aside'>
      <div className='email-body'>
        <div className='email-profile'>
          <div className='email-body'>
            <div className='email-compose'>
              <div className='email-top compose-border'>
                <Row>
                  <Col sm={8} className='xl-50'>
                    <h3 className='mb-0'>{NewMessage}</h3>
                  </Col>
                  <Col sm={4} className='xl-50 btn-middle'>
                    <Button color='primary' className='btn-block btn-mail text-center mb-0 mt-0 w-100'>
                      <i className='fa fa-paper-plane me-2'></i> {Send}
                    </Button>
                  </Col>
                </Row>
              </div>
              <EmailComposeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailComposeHeader;
