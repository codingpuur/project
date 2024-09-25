import { Card, Col } from "reactstrap";
import { useState } from "react";
import { LatestPhoto } from "@/utils/Constant";
import LatestPhotosCollapse from "./LatestPhotosCollapse";
import HeaderWithIcon from "@/CommonElements/HeaderWithIcon";

const LatestPhotos = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12} className="xl-50 box-col-12 custom-latest-photo">
      <Card>
        <HeaderWithIcon
          Heading={LatestPhoto}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <LatestPhotosCollapse isFilter={isOpen} />
      </Card>
    </Col>
  );
};

export default LatestPhotos;
