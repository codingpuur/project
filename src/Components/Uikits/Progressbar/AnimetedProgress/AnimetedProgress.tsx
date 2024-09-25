import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { AnimetedProgressTopData, stripedProgressData } from "@/Data/Uikits/Progressbar/ProgressbarData";
import CommonHeader from "@/Common/CommonHeader";
import { Progressanimated } from "@/utils/Constant";

const AnimetedProgress = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={Progressanimated}
          subTitle={AnimetedProgressTopData}
          headClass="pb-0"
        />
        <CardBody className=" progress-showcase">
          <Row>
            <Col>
              <Progress striped animated value={10} color="primary" />
              {stripedProgressData &&
                stripedProgressData.map((item, index) => (
                  <Progress
                    striped
                    animated
                    value={item.length}
                    color={item.class}
                    key={index}
                  />
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimetedProgress;
