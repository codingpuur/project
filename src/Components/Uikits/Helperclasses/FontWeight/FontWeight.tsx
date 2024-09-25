import { Card, CardBody, Col } from "reactstrap";
import { FontWeightDataTop, fontWeightData } from "@/Data/Uikits/HelperClass/HelperClassData";
import CommonHeader from "@/Common/CommonHeader";
import { FontWeights } from "@/utils/Constant";

const FontWeight = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={FontWeights} subTitle={FontWeightDataTop} headClass='pb-0'/>
        <CardBody>
          <div className="d-flex align-items-center mb-2 gap-2">
            <div className={'f-w-100'}>{'You can set light font weight heading .f-w-100'}</div>
          </div>
          {fontWeightData &&
            fontWeightData.map((item, index) => (
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={`${item.class}`}>{item.text}</div>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeight;
