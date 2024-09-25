import { Button, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Surprise, TitleWithATextUnder } from "@/utils/Constant";
import Swal from "sweetalert2";

const TitleWithText = () => {
  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className='height-equal'>
        <CommonHeader title={TitleWithATextUnder} subTitle={[{ text: "Print the title with text." }]} />
        <CardBody className='btn-showcase'>
          <Button color='secondary' className='sweet-2' type='button' onClick={() => Swal.fire("It's Magic!", "Thank you for visiting Cion theme")}>
            {Surprise}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithText;
