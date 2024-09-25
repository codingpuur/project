import { Card, CardBody, CardFooter, Col } from "reactstrap";
import OrderBody from "./OrderBody";
import OrderFooterTable from "./OrderFooterTable";
import { OrderDataTop } from "@/Data/Uikits/Grid/GridData";
import CommonHeader from "@/Common/CommonHeader";
import { Orders } from "@/utils/Constant";

const Order = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Orders} subTitle={OrderDataTop} headClass='pb-0'/>
        <CardBody className="grid-showcase">
          <OrderBody />
        </CardBody>
        <CardFooter>
          <OrderFooterTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Order;
