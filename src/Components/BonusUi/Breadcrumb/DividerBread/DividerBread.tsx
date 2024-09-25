import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { DividerBreadcrumb, Home, Href, Progress, UIKits } from "@/utils/Constant";
import { DividerBreadData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";

const DividerBread = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={DividerBreadcrumb} subTitle={DividerBreadData} headClass="pb-0"/>
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem href={Href}>
              {Home}
            </BreadcrumbItem>
            <BreadcrumbItem active>{UIKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="breadcrumb-icon m-0">
            <BreadcrumbItem href={Href}>
              {Home}
            </BreadcrumbItem>
            <BreadcrumbItem href={Href}>
              {UIKits}
            </BreadcrumbItem>
            <BreadcrumbItem active>{Progress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerBread;
