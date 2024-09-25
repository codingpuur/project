import  { Fragment } from "react";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { CustomProgressBars } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { CustomProgressTopData, customProgressData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const CustomProgress = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={CustomProgressBars} subTitle={CustomProgressTopData} headClass='pb-0'/>
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <h6 className="mb-2">{'0% Getting Started'} </h6>
              <Progress value={0} className="mb-4" />
              {customProgressData &&
                customProgressData.map((item, index) => (
                  <Fragment key={index}>
                    <h6 className="mb-2">{item.text} </h6>
                    <Progress value={item.length} className="mb-4" striped={item.strip} color={item.class} animated={item.strip}>{item.length}</Progress>
                  </Fragment>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomProgress;
