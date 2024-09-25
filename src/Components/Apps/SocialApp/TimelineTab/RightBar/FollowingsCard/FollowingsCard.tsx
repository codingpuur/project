import { useState } from "react";
import { Card, Col } from "reactstrap";
import { Following } from "@/utils/Constant";
import FollowingsCardCollapse from "./FollowingsCardCollapse";
import HeaderWithIcon from "@/CommonElements/HeaderWithIcon";

const FollowingsCard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12} className="xl-50 box-col-12">
      <Card>
        <HeaderWithIcon
          Heading={Following}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <FollowingsCardCollapse isFilter={isOpen} />
      </Card>
    </Col>
  );
};

export default FollowingsCard;
