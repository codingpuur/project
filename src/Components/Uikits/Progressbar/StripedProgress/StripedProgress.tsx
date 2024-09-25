import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { ProgressStriped } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { StripedProgressTopData, stripedProgressData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const StripedProgress = () => {
  
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={ProgressStriped} subTitle={StripedProgressTopData} headClass='pb-0'/>
        <CardBody className="body progress-showcase">
          <Row>
            <Col>
                <Progress striped value={10} color="primary" />
              {stripedProgressData &&
                stripedProgressData.map((item, index) => (
                    <Progress striped value={item.length} color={item.class} key={index} />
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StripedProgress;
