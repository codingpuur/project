import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { ColoredBreadcrumb } from "@/utils/Constant";
import BgInfo from "./BgInfo";
import BgWarning from "./BgWarning";
import BgDanger from "./BgDanger";
import { ColoredBreadData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";

const ColoredBread = () => {
  return (
    <Col sm={12}>
      <Card className="colored-breadcrumb">
        <CommonHeader title={ColoredBreadcrumb} subTitle={ColoredBreadData} headClass="pb-0"/>
        <CardBody>
          <BgInfo />
          <BgWarning />
          <BgDanger />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBread;
