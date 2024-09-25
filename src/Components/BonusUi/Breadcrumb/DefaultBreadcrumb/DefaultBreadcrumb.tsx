import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { Alert, DefaultBreadcrumbs, Home, Href, UIKits } from "@/utils/Constant";
import Link from "next/link";
import { DefaultBreadcrumbData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";

const DefaultBreadcrumb = () => {
  return (
    <Col sm={6}>
      <Card className='height-equal'>
        <CommonHeader title={DefaultBreadcrumbs} subTitle={DefaultBreadcrumbData} headClass='pb-0' />
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href={Href}>{Home}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{UIKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href={Href}>{Home}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={Href}>{UIKits}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{Alert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultBreadcrumb;
