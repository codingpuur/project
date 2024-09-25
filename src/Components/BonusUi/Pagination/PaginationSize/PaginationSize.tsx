import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { PaginationSizing } from "@/utils/Constant";
import LargePage from "./LargePage";
import MediumPage from "./MediumPage/MediumPage";
import SmallPage from "./SmallPage/SmallPage";
import { PaginationSizeData } from "@/Data/BonusUi/Pagination/PaginationData";

const PaginationSize = () => {
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={PaginationSizing} subTitle={PaginationSizeData} headClass='pb-0' />
        <CardBody>
          <LargePage />
          <MediumPage />
          <SmallPage />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSize;
