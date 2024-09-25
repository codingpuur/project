import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import { VerticalStyleHeading } from "@/utils/Constant";
import VerticalStyleForm from "./VerticalStyleForm";
import { VerticalStyleData } from "@/Data/Form/FormControl/FormControlData";

const VerticalStyle = () => {
  return (
    <Col sm={12} xxl={6} className='box-col-12'>
      <Card className=' height-equal'>
        <CommonHeader title={VerticalStyleHeading} subTitle={VerticalStyleData} headClass='pb-0' />
        <CardBody>
          <VerticalStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default VerticalStyle;
