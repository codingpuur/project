import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import { WithoutBordersStyleHeading } from "@/utils/Constant";
import WithoutBordersStyleForm from "./WithoutBordersStyleForm";
import { WithoutBordersStyleData } from "@/Data/Form/FormControl/FormControlData";

const WithoutBordersStyle = () => {
  return (
    <Col sm={12} xxl={6} className='box-col-6'>
      <Card>
        <CommonHeader title={WithoutBordersStyleHeading} subTitle={WithoutBordersStyleData} headClass='pb-0' />
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default WithoutBordersStyle;
