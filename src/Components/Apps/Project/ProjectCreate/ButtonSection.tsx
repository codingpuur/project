import { Button, Col, Row } from "reactstrap";
import { Add, Cancel } from "@/utils/Constant";
import Link from "next/link";

const ButtonSection = () => {
  return (
    <Row>
      <Col>
        <div className='text-end'>
          <Button color='success' className='me-3'>
            {Add}
          </Button>
          <Link href={`/apps/project/projectlist`}>
            <Button color='danger'>{Cancel}</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default ButtonSection;
