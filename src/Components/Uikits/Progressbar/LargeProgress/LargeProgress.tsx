import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { LargeProgressBars } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { LargeProgressTopData, largeProgressData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const LargeProgress = () => {
  
  return (
    <Col xl={6}>
      <Card className='height-equal'>
        <CommonHeader title={LargeProgressBars} subTitle={LargeProgressTopData} headClass='pb-0' />
        <CardBody className='progress-showcase'>
          <Row>
            <Col>
              <Progress value={25} color='primary' style={{ height: 20 }}>
                25%
              </Progress>
              {largeProgressData &&
                largeProgressData.map((item, index) => (
                  <Progress value={item.length} color={item.class} style={{ height: 20 }} key={index}>
                    {item.length}%
                  </Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LargeProgress;
