import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Fw300, Fw400, Fw500, Fw600, Fw700 } from "@/utils/Constant";
import { FontData } from "@/Data/Uikits/Typography/TypographyData";

const FontWeight = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title='Font Weight' subTitle={FontData} headClass='pb-0' />
        <CardBody className='d-flex flex-column gap-3'>
          <h1 className='f-w-700'>
            {"You can set bolder font weight Heading 1 using"}
            <code> {Fw700}</code>
          </h1>
          <h2 className='f-w-600'>
            {"You can set bold font weight Heading 2 using"}
            <code> {Fw600}</code>
          </h2>
          <h3 className='f-w-500'>
            {"You can set medium font weight Heading 3 using"}
            <code> {Fw500}</code>
          </h3>
          <h4 className='f-w-400'>
            {"You can set normal font weight Heading 4 using"}
            <code> {Fw400}</code>
          </h4>
          <h5 className='f-w-300'>
            {"You can set light font weight Heading 5 using"}
            <code> {Fw300}</code>
          </h5>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeight;
