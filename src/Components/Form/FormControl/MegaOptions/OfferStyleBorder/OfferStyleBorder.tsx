import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import { offerStyleBorderHeading } from "@/utils/Constant";
import OfferStyleBorderForm from "./OfferStyleBorderForm";
import { OfferStyleBorderData } from "@/Data/Form/FormControl/FormControlData";

const OfferStyleBorder = () => {
  return (
    <Col sm={12} xxl={6} className='box-col-6'>
      <Card>
        <CommonHeader title={offerStyleBorderHeading} subTitle={OfferStyleBorderData} headClass='pb-0' />
        <CardBody className='megaoptions-border-space-sm'>
          <OfferStyleBorderForm />
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default OfferStyleBorder;
