import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import CommonHeader from "@/Common/CommonHeader";
import { DangerAlerts, Dangermode } from "@/utils/Constant";

const DangerAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "it's danger",
      text: "Something went wrong!",
      icon: "error",
    });
  };
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={DangerAlerts} subTitle={[{ text: "Print the basic sweet-alert" }]} />
        <CardBody className='btn-showcase'>
          <Button color='danger' className='sweet-13' onClick={handleAlert}>
            {Dangermode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DangerAlert;
