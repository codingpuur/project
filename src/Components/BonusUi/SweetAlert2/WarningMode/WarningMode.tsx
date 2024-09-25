import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import CommonHeader from "@/Common/CommonHeader";
import { Alertmode, WarningModal } from "@/utils/Constant";

const WarningMode = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "warning",
    });
  };
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={WarningModal} subTitle={[{ text: "Print the warning message" }]} />
        <CardBody className='btn-showcase'>
          <Button color='warning' className='sweet-13' onClick={handleAlert}>
            {Alertmode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningMode;
