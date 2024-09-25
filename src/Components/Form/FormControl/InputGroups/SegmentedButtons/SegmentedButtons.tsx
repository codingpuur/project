import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SegmentedButtonsHeading } from "@/utils/Constant";
import SegmentedButtonsCardBody from "./SegmentedButtonsCardBody";
import { SegmentedButtonsData } from "@/Data/Form/FormControl/FormControlData";

const SegmentedButtons = () => {
  return (
    <Col md={6}>
      <Card className='height-equal'>
        <CommonHeader title={SegmentedButtonsHeading} subTitle={SegmentedButtonsData} headClass='pb-0' />
        <SegmentedButtonsCardBody />
      </Card>
    </Col>
  );
};

export default SegmentedButtons;
