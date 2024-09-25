import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { CustomHeightProgressBars } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { CustomHeightProgressData, customHeightData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const CustomHeightProgress = () => {
  
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={CustomHeightProgressBars} subTitle={CustomHeightProgressData} headClass='pb-0'/>
        <CardBody className="progress-showcase">
          <Row>
            <Col>
                <Progress value={25} color="primary" style={{height : 1}}/>
              {customHeightData &&
                customHeightData.map((item, index) => (
                    <Progress value={item.length} color={item.class} style={{height : item.text}} key={index}/>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomHeightProgress;
