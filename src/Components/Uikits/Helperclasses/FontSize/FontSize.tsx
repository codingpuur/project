import { Card, CardBody, Col } from "reactstrap";
import { FontSizeDataTop, fontSizeData } from "@/Data/Uikits/HelperClass/HelperClassData";
import { FontsSizes } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";

const FontSize = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={FontsSizes} subTitle={FontSizeDataTop} headClass='pb-0'/>
        <CardBody>
          <div className="gradient-border">
            <div className="font-wrapper border">
              <div className="f-14">{'Font-size .f-14'}</div>
            </div>
            {fontSizeData &&
              fontSizeData.map((item, index) => (
                <div className="font-wrapper border" key={index}>
                  <div className={`${item.class}`}>{item.text}</div>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontSize;
