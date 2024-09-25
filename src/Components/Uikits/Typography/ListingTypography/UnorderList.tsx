import { Col } from "reactstrap";
import { unOrderListData } from "@/Data/Uikits/Typography/TypographyData";
import { Unorder_list } from "@/utils/Constant";

const UnorderList = () => {
  return (
    <Col md={6} xxl={4}>
      <div className="card-wrapper border rounded-3">
        <h6 className="sub-title fw-bold">{Unorder_list}</h6>
        <ul className="simple-list">
          {unOrderListData &&
            unOrderListData.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </Col>
  );
};

export default UnorderList;
