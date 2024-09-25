import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import CommonHeader from "@/Common/CommonHeader";
import { Username, UsernameAlert } from "@/utils/Constant";

const UserNameAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      input: "text",
      inputLabel: "Please! Submit Your Username :",
    }).then((result) => {
      result.isConfirmed && Swal.fire({ text: `Your name is : ${result.value}` });
    });
  };
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={UsernameAlert} subTitle={[{ text: "Print the basic sweet-alert" }]} />
        <CardBody className='btn-showcase'>
          <Button color='secondary' className='sweet-13' onClick={handleAlert}>
            {Username}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserNameAlert;
