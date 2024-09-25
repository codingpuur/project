import { Card, CardBody, Col } from "reactstrap";
import { BrowserDefaultsHeading } from "@/utils/Constant";
import BrowserDefaultForm from "./BrowserDefaultForm";
import CommonHeader from "@/Common/CommonHeader";
import { BrowserDefaultData } from "@/Data/Form/FormControl/FormControlData";

const BrowserDefault = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={BrowserDefaultsHeading} subTitle={BrowserDefaultData} headClass="pb-0"/>
        <CardBody className="custom-input">
            <BrowserDefaultForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BrowserDefault;
