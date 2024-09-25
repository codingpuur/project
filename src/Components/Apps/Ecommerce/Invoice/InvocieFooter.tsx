import { Button, Col } from "reactstrap";
import { Cancel, Print } from "@/utils/Constant";

const InvocieFooter = () => {
  return (
    <Col sm={12} className="text-center mt-3">
      <Button color="primary" className="me-2" >
        {Print}
      </Button>
      <Button color="secondary">
        {Cancel}
      </Button>
    </Col>
  );
};

export default InvocieFooter;
