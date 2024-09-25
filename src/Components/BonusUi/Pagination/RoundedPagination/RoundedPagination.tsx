import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import RoundedList from "./RoundedList";
import { RoundedPaginations } from "@/utils/Constant";
import { RoundedPaginationData } from "@/Data/BonusUi/Pagination/PaginationData";

const RoundedPagination = () => {
  
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={RoundedPaginations} subTitle={RoundedPaginationData} headClass="pb-0"/>
        <CardBody>
          <RoundedList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedPagination;
