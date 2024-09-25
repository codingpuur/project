import { Card, CardBody, Col } from "reactstrap";
import { TextColorsData, textColorsData } from "@/Data/Uikits/HelperClass/HelperClassData";
import CommonHeader from "@/Common/CommonHeader";
import { TextColor } from "@/utils/Constant";

const TextColors = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={TextColor} subTitle={TextColorsData} headClass='pb-0'/>
        <CardBody>
          <div>
            <div className="d-flex align-items-center mb-2 gap-2"></div>
            <div className='font-primary'>{'This is a font-primary text used class as .font-primary'}</div>
          </div>
          {textColorsData &&
            textColorsData.map((item, index) => (
              <div key={index}>
                <div
                  className="d-flex align-items-center mb-2 gap-2"
                  key={index}
                ></div>
                <div className={`${item.class}`}>{item.text}</div>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColors;
