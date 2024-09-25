import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { FlatCardText, FlatCards } from "@/utils/Constant";
import { FlatCardData } from "@/Data/BonusUi/Basiccard/BasiccardData";

const FlatCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className='b-r-0'>
        <CommonHeader title={FlatCards} subTitle={FlatCardData} headClass='pb-0' />
        <CardBody>
          <p className='mb-0'>{FlatCardText}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatCard;
