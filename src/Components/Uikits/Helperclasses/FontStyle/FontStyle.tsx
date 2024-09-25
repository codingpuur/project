import { Card, CardBody, Col } from "reactstrap";
import { FontStyleDataTop, fontStyleData } from "@/Data/Uikits/HelperClass/HelperClassData";
import CommonHeader from "@/Common/CommonHeader";

const FontStyle = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title="Font-Style" subTitle={FontStyleDataTop} headClass='pb-0'/>
        <CardBody>
          <p className='f-s-normal'>
            {'This is a .f-s-normal font-style'}
          </p>
          {fontStyleData &&
            fontStyleData.map((item, index) => (
              <p className={item.class} key={index}>
                {item.text}
              </p>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontStyle;
