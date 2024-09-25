import { Accordion, Alert, Animations, Avatar, BonusUi, Dropdowns, Grid, Order_list, Tabs, Tagpills, Typography, UiKits } from "@/utils/Constant";
import { Col } from "reactstrap";

const OrderList = () => {
  return (
    <Col md={6} xxl={4}>
      <div className="card-wrapper border rounded-3 h-100">
        <h6 className="sub-title fw-bold">{Order_list}</h6>
        <ol>
          <li>{UiKits}</li>
          <li>{BonusUi}</li>
          <li>{Animations}</li>
          <li>
            <ol>
              <li>{Typography}</li>
              <li>{Avatar}</li>
              <li>{Grid}</li>
              <li>{Tagpills}</li>
              <li>{Alert}</li>
            </ol>
          </li>
          <li>{Dropdowns}</li>
          <li>{Tabs}</li>
          <li>{Accordion}</li>
        </ol>
      </div>
    </Col>
  );
};

export default OrderList;
