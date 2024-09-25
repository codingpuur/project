import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import { MessageSquare, Settings } from "react-feather";
import { AskQuestion, Href, Navigation } from "@/utils/Constant";
import NavigationOption from "./NavigationOption";

const AskQuestions = () => {
  return (
    <Col lg={12}>
      <Card className='card-mb-faq'>
        <CardHeader className='faq-header '>
          <h3 className='m-0'>{Navigation}</h3>
          <Settings />
        </CardHeader>
        <CardBody className='faq-body'>
          <div className='navigation-btn'>
            <Button color='primary' style={{ color: "#fff" }} href={Href}>
              <MessageSquare className='m-r-10' />
              {AskQuestion}
            </Button>
          </div>
          <NavigationOption />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AskQuestions;
