import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DefaultPaginations } from "@/utils/Constant";
import DefaultList from "./DefaultList";
import { DefaultPaginationData } from "@/Data/BonusUi/Pagination/PaginationData";

const DefaultPagination = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={DefaultPaginations} subTitle={DefaultPaginationData} headClass="pb-0"/>
        <CardBody>
          <DefaultList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultPagination;
