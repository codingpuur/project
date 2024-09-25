import { Card, CardBody, Col } from "reactstrap";
import HeadingsBody from "./HeadingsBody";
import CommonHeader from "@/Common/CommonHeader";
import { Heading } from "@/utils/Constant";
import { Typographyheading } from "@/Data/Uikits/Typography/TypographyData";

const Headings = () => {
  

  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={Heading} subTitle={Typographyheading} headClass='pb-0'/>
        <CardBody>
          <HeadingsBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Headings;
