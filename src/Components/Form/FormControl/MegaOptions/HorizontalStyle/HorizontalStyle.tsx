import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import { HorizontalStyleHeading } from "@/utils/Constant";
import HorizontalStyleForm from "./HorizontalStyleForm";
import { HorizontalStyleData } from "@/Data/Form/FormControl/FormControlData";

const HorizontalStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-12">
      <Card className="height-equal">
        <CommonHeader title={HorizontalStyleHeading} subTitle={HorizontalStyleData} headClass="pb-0"/>
        <CardBody>
          <HorizontalStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default HorizontalStyle;
