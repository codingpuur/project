import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { BasicProgressBars } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { BasicProgressTopData, basicProgressData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const BasicProgress = () => {
  
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BasicProgressBars} subTitle={BasicProgressTopData} headClass='pb-0'/>
        <CardBody className="progress-showcase">
          <Row>
            <Col>
                <Progress value={0}/>
              {basicProgressData &&
                basicProgressData.map((item, index) => (
                    <Progress value={item.length} color={item.class} key={index}>{item.length}%</Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicProgress;
