import { Button, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicExample, Clickit } from "@/utils/Constant";
import Swal from "sweetalert2";
import { BasicAlertData } from "@/Data/BonusUi/SweetAlert2/SweetalertData";

const BasicAlert = () => {
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={BasicExample} subTitle={BasicAlertData} />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='sweet-1' onClick={() => Swal.fire("Welcome! to the Cion theme")}>
            {Clickit}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicAlert;
