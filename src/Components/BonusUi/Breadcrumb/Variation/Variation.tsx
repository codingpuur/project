import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicTables, Bootstrapgt, Homegt, Href, Tablesgt, VariationOfBreadcrumb } from "@/utils/Constant";
import { VariationData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";

const Variation = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={VariationOfBreadcrumb} subTitle={VariationData} headClass="pb-0"/>
        <CardBody>
          <Breadcrumb className="breadcrumb-no-divider mb-0 gap-2">
            <BreadcrumbItem className="mb-1 mb-xl-0" href={Href}>
              {Homegt}
            </BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0" href={Href}>
              {Tablesgt}
            </BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0" href={Href}>
              {Bootstrapgt}
            </BreadcrumbItem>
            <BreadcrumbItem className="active ps-0">{BasicTables}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Variation;
