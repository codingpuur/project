import { Col } from "reactstrap";
import { lightBackgroundData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Light_Backgrounds } from "@/utils/Constant";

const LightBackground = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{Light_Backgrounds}</h3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box alert-light-primary" />
          {'.alert-light-primary'}
        </div>
        {lightBackgroundData &&
          lightBackgroundData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default LightBackground;
