import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BorderLefts, BorderleftText, ContactNumber, MailUs, VisitUs } from "../../../../utils/Constant";
import { BorderLeftData } from "@/Data/BonusUi/CreativeCard/CreativeCardData";

const BorderLeft = () => {
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderLefts} subTitle={BorderLeftData} headClass="border-l-primary pb-0" />
        <CardBody>
          <p>
            {BorderleftText}
            <br />
            <strong>{VisitUs} </strong> 2600 Hollywood Blvd,Florida, United
            States- 33020
            <br />
            <strong>{MailUs}</strong>contact@us@gmail.com
            <br />
            <strong>{ContactNumber} </strong>(954) 357-7760
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderLeft;
