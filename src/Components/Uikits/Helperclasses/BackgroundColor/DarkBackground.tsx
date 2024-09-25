import { Col } from "reactstrap";
import { darkBackgroundData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { Dark_Background } from "@/utils/Constant";

const DarkBackground = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{Dark_Background}</h3>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-primary" />
          {'.bg-primary'}
        </div>
        {darkBackgroundData &&
          darkBackgroundData.map((item, index) => (
            <div className="d-flex align-items-center mb-2 gap-2" key={index}>
              <div className={`helper-box ${item.class}`} />
              {item.text}
            </div>
          ))}
      </div>
    </Col>
  );
};

export default DarkBackground;
