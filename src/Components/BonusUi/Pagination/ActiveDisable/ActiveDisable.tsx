import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import ActiveList from "./ActiveList";
import { PaginationWithActiveAndDisabled } from "@/utils/Constant";
import { ActiveDisableData } from "@/Data/BonusUi/Pagination/PaginationData";

const ActiveDisable = () => {
  return (
    <Col md={6}>
      <Card className='height-equal'>
        <CommonHeader title={PaginationWithActiveAndDisabled} subTitle={ActiveDisableData} headClass='pb-0' />
        <CardBody>
          <ActiveList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveDisable;
