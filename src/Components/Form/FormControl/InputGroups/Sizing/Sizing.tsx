import { Card, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { SizingHeader } from "@/utils/Constant";
import SizingCardBody from "./SizingCardBody";
import { SizingData } from "@/Data/Form/FormControl/FormControlData";

const Sizing = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={SizingHeader} subTitle={SizingData} headClass='pb-0' />
        <SizingCardBody />
      </Card>
    </Col>
  );
};

export default Sizing;
