import {Card,Col,Row} from "reactstrap";
import ReadEmailList from "./ReadEmailList";
import EmailContent from "./EmailContent";
import EmailTop from "./EmailTop";
import { EmailContentProps } from "@/Types/Apps/EmailTypes";

const EmailApplicationContain: React.FC<EmailContentProps>  = ({ activeTab, activeCallback }) => {
  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <Row>
          <Col xl={4} md={12} className="box-md-12 pr-0"  >
            <div className="pe-0"></div>
            <EmailTop />
            <ReadEmailList activeCallback={activeCallback} />
          </Col>
          <EmailContent activeTab={activeTab}/>
        </Row>
      </Card>
    </div>
  );
};

export default EmailApplicationContain;
