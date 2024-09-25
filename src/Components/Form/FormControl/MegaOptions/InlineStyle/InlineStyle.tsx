import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import { InlineStyleHeading } from "@/utils/Constant";
import InlineStyleForm from "./InlineStyleForm";
import { InlineStyleData } from "@/Data/Form/FormControl/FormControlData";

const InlineStyle = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={InlineStyleHeading} subTitle={InlineStyleData} headClass='pb-0' />
        <CardBody className='megaoptions-border-space-sm'>
          <InlineStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default InlineStyle;
