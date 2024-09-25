import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import CommonHeader from "@/Common/CommonHeader";
import { AutoCloseTimer, Timer } from "@/utils/Constant";

const AutoCloseAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Auto close alert!",
      text: "just a wait! I will close in 3 second!",
      timer: 3000,
      showConfirmButton: false,
    });
  };
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={AutoCloseTimer} subTitle={[{ text: "A text message with an automatic timer" }]} />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='sweet-14' onClick={handleAlert}>
            {Timer}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseAlert;
