import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import CommonHeader from "@/Common/CommonHeader";
import { Loginsuccessfully, SuccessMessages } from "@/utils/Constant";

const SuccessMessage = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={SuccessMessages} subTitle={[{ text: "Print the basic sweet-alert" }]} />
        <CardBody className='btn-showcase'>
          <Button color='success' className='sweet-13' onClick={handleAlert}>
            {Loginsuccessfully}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SuccessMessage;
