import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { VariationRadioHeading } from "@/utils/Constant";
import SelectPaymentMethod from "./SelectPaymentMethod";
import LearnAboutWebDesign from "./LearnAboutWebDesign";
import RadiosWithCreativeOptions from "./RadiosWithCreativeOptions";
import { VariationRadioData } from "@/Data/Form/FormControl/FormControlData";

const VariationRadio = () => {
  return (
    <Col xs={12}>
      <Card className="custom-variation">
        <CommonHeader title={VariationRadioHeading} subTitle={VariationRadioData} headClass='pb-0' />
        <CardBody>
          <Row className='g-3'>
            <SelectPaymentMethod />
            <LearnAboutWebDesign />
            <RadiosWithCreativeOptions />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationRadio;
