import { Button, Col, Row } from "reactstrap";
import { EndCall } from "@/utils/Constant";
import CallIcons from "./CallIcons";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const ChatHistory = () => {
  return (
    <Row>
      <Col className='text-center pe-0 call-content'>
        <div>
          <div className='total-time'>
            <h2 className='digits'>36 : 56</h2>
          </div>
          <CallIcons />
          <Button size='lg' className='btn-danger-gradien'>
            {EndCall}
          </Button>
          <div className='receiver-img'>
            <Image src={`${ImagePath}/other-images/receiver-img.jpg`} alt='receiver-img' height={230} width={230} />
          </div>
        </div>
      </Col>
      <Col sm={7} className='ps-0 caller-img'>
        <Image className='img-fluid' src={`${ImagePath}/other-images/caller.jpg`} alt='caller' height={535} width={461} />
      </Col>
    </Row>
  );
};

export default ChatHistory;
