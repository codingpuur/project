import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ImagesWithCheckBoxHeading } from "@/utils/Constant";
import MainImageCheckBox from "./MainImageCheckBox";
import { ImagesWithCheckBoxData } from "@/Data/Form/FormControl/FormControlData";

const ImagesWithCheckBox = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={ImagesWithCheckBoxHeading} subTitle={ImagesWithCheckBoxData} headClass='pb-0' />
        <CardBody>
          <div className='main-img-checkbox'>
            <MainImageCheckBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithCheckBox;
