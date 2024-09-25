import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import IconList from "./IconList";
import { PaginationWithIcons } from "@/utils/Constant";
import { IconPaginationData } from "@/Data/BonusUi/Pagination/PaginationData";

const IconPagination = () => {
  return (
    <Col md={6}>
      <Card className='height-equal'>
        <CommonHeader title={PaginationWithIcons} subTitle={IconPaginationData} headClass='pb-0' />
        <CardBody>
          <IconList />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconPagination;
