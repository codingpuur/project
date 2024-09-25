import { Card, CardBody, Col } from "reactstrap";
import { Href, Upgrade } from "@/utils/Constant";
import Link from "next/link";

const ExclusiveSelection = () => {
  return (
    <Col xl={12}>
      <Card className="update-card">
        <CardBody>
          <h2 className="text-white">
            {"Everyone may benefit from this exclusive selection."}
          </h2>
          <p className="text-white f-16">
            {"Everyone may benefit from this exclusive selection."}
          </p>
          <Link className="btn bg-white font-primary" href={Href}>
            {Upgrade}
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExclusiveSelection;
