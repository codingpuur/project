import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { PaginationAlignment } from "@/utils/Constant";
import DefaultPagination from "./DefaultPagination";
import AlignCenter from "./AlignCenter";
import AlignBottom from "./AlignBottom";
import { PaginationAlignData } from "@/Data/BonusUi/Pagination/PaginationData";

const PaginationAlign = () => {
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={PaginationAlignment} subTitle={PaginationAlignData} headClass="pb-0"/>
        <CardBody>
          <DefaultPagination />
          <AlignCenter />
          <AlignBottom />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlign;
