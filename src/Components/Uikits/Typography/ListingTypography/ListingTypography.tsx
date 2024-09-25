import { Card, CardBody, Col, Row } from "reactstrap";
import UnorderList from "./UnorderList";
import OrderList from "./OrderList";
import OrderListType2 from "./OrderListType2";
import CommonHeader from "@/Common/CommonHeader";
import { ListingTypographys } from "@/utils/Constant";
import { TypographyListData } from "@/Data/Uikits/Typography/TypographyData";

const ListingTypography = () => {
 
  return (
    <Col sm={12} className="listing">
      <Card>
        <CommonHeader title={ListingTypographys} subTitle={TypographyListData} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <UnorderList />
            <OrderList />
            <OrderListType2 />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingTypography;
