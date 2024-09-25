import { Col } from "reactstrap";
import { additiveRadiusData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Additive_Radius } from "@/utils/Constant";

const AdditiveRadius = () => {
  return (
    <Col xl={4} sm={12}>
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{Additive_Radius}</h3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-radius radius-wrapper rounded" />
          {".rounded"}
        </div>
        {additiveRadiusData &&
          additiveRadiusData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-radius radius-wrapper ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default AdditiveRadius;
