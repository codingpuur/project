import { Card, CardBody, Col } from "reactstrap";
import { BorderColorData, borderSideColorData } from "@/Data/Uikits/HelperClass/HelperClassData";
import CommonHeader from "@/Common/CommonHeader";
import { BorderColor } from "@/utils/Constant";

const BorderColorComponent = () => {
  
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={BorderColor} subTitle={BorderColorData} headClass='pb-0'/>
        <CardBody>
          <div className="gradient-border">
            <div className="d-flex align-items-center mb-2 gap-2">
              <div className="helper-box b-primary border fill-wrapper" />
              {".b-primary"}
            </div>
            {borderSideColorData &&
              borderSideColorData.map((item, index) => (
                <div className="d-flex align-items-center mb-2 gap-2" key={index} >
                  <div className={`helper-box ${item.class} border fill-wrapper`}/>
                  {item.text}
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderColorComponent;
