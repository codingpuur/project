import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import CommonCardFooter from "@/CommonElements/Footer/CommonCardFooter";
import { VariationOfAddonsHeading } from "@/utils/Constant";
import VariationOfAddonsForms from "./VariationOfAddonsForms";
import { VariationOfAddonsData } from "@/Data/Form/FormControl/FormControlData";

const VariationOfAddons = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={VariationOfAddonsHeading} subTitle={VariationOfAddonsData} headClass='pb-0' />
        <CardBody className='card-wrapper input-radius'>
          <Row>
            <Col>
              <VariationOfAddonsForms />
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default VariationOfAddons;
