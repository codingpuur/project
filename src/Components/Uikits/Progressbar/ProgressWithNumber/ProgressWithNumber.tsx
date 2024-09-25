import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import { ProgressWithNumberSteps } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { ProgressWithNumberData } from "@/Data/Uikits/Progressbar/ProgressbarData";

const ProgressWithNumber = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={ProgressWithNumberSteps} subTitle={ProgressWithNumberData} headClass='pb-0' />
        <CardBody>
          <div className='position-relative m-3 progress-number'>
            <Progress className='progress-wrapper' value={50} />

            <Button size='sm' color='primary' className='position-absolute top-0 start-0 translate-middle rounded-circle btn-rounds'>
              1
            </Button>
            <Button size='sm' color='primary' className='position-absolute top-0 start-50 translate-middle rounded-circle btn-rounds'>
              2
            </Button>
            <Button size='sm' color='transparent' className='progress-btn position-absolute top-0 start-100 translate-middle rounded-circle btn-rounds'>
              3
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProgressWithNumber;
