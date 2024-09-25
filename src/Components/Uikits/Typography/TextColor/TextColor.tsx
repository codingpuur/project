import { Card, CardBody, Col } from "reactstrap";
import { ColorData, textColorData } from "@/Data/Uikits/Typography/TypographyData";
import CommonHeader from "@/Common/CommonHeader";
import { TextColors } from "@/utils/Constant";

const TextColor = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={TextColors} subTitle={ColorData} headClass='pb-0'/>
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <p className='txt-primary mb-0'>
              {'This is Primary text You can archive this adding'}
              <code>{'.txt-primary'}</code> class
            </p>
            {textColorData &&
              textColorData.map((item, index) => (
                <p key={index} className={item.class}>
                  {item.text}
                  <code>{item.code}</code> class
                </p>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColor;
