import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ImagesWithRadioBoxHeading } from "@/utils/Constant";
import MainImageRadioBox from "./MainImageRadioBox";
import { ImagesWithRadioData } from "@/Data/Form/FormControl/FormControlData";

const ImagesWithRadio = () => {
  
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={ImagesWithRadioBoxHeading} subTitle={ImagesWithRadioData} headClass="pb-0"/>
        <CardBody>
          <div className="main-img-checkbox">
            <MainImageRadioBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithRadio;
