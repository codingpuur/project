import { Col } from "reactstrap";
import { borderColorData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Border_Color } from "@/utils/Constant";

const BorderColor = () => {
  return (
    <Col xxl={3} sm={6}>
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h3 className="mb-3">{Border_Color}</h3>
        <div className="d-flex align-items-center mb-2 gap-2" >
          <div className="helper-box border border-primary" />
          <span>{".border-primary"}</span>
        </div>
        {borderColorData &&
          borderColorData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box border ${item.class}`} />
              <span>{item.text}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};

export default BorderColor;
