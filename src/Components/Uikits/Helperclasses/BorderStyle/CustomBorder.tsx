import { Col } from "reactstrap";
import { customBorderData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { CustomBorder_radius } from "@/utils/Constant";

const CustomBorder = () => {
  return (
    <Col xxl={3} sm={6}>
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h3 className="mb-3">{CustomBorder_radius}</h3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-light border b-r-0" />
          <span>{".b-r-0"}</span>
        </div>
        {customBorderData &&
          customBorderData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box bg-light border ${item.class}`} />
              <span>{item.text}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};

export default CustomBorder;
