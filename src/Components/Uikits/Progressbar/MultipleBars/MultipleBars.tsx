import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { Multiplebars } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { MultipleBarsData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const MultipleBars = () => {
  
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={Multiplebars} subTitle={MultipleBarsData} headClass='pb-0'/>
        <CardBody className="progress-showcase"> 
          <Row>
            <Col>
              <Progress multi>
                <Progress bar value="30" />
                <Progress bar color="success" value="20" />
                <Progress bar color="info" value="15" />
              </Progress>
              <Progress multi>
                <Progress bar color="primary" value="10" />
                <Progress bar color="secondary" value="10" />
                <Progress bar color="success" value="10" />
                <Progress bar color="info" value="10" />
                <Progress bar color="warning" value="10" />
                <Progress bar color="danger" value="10" />
                <Progress bar color="primary" value="10" />
                <Progress bar color="light" value="10" />
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleBars;
