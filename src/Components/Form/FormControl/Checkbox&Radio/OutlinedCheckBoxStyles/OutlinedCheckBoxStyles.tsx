import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { OutlinedCheckBoxStylesHeading } from "@/utils/Constant";
import OutLineCheckBoxCardBody from "./OutLineCheckBoxCardBody";
import { OutlinedCheckBoxStylesData } from "@/Data/Form/FormControl/FormControlData";

const OutlinedCheckBoxStyles = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={OutlinedCheckBoxStylesHeading} subTitle={OutlinedCheckBoxStylesData} headClass='pb-0' />
        <OutLineCheckBoxCardBody />
      </Card>
    </Col>
  );
};

export default OutlinedCheckBoxStyles;
