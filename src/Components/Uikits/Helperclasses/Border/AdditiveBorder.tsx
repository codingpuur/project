import { Col } from "reactstrap";
import { additiveBorderData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Additive_Border } from "@/utils/Constant";

const AdditiveBorder = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{Additive_Border}</h3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-light border" />
          {'.border'}
        </div>
        {additiveBorderData &&
          additiveBorderData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box bg-light ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default AdditiveBorder;
