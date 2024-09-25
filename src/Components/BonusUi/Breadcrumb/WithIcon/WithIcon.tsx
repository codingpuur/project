import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BonusUi, Href, WithIconsBreadcrumb } from "@/utils/Constant";
import Link from "next/link";
import { WithIconData } from "@/Data/BonusUi/Breadcrumb/BreadcrumbData";

const WithIcon = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={WithIconsBreadcrumb} subTitle={WithIconData} headClass='pb-0' />
        <CardBody>
          <Breadcrumb className='p-l-0'>
            <BreadcrumbItem>
              <Link href={Href}>
                <i className='fa fa-home' />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className='m-b-0 p-b-0 p-l-0'>
            <BreadcrumbItem>
              <Link href={Href}>
                <i className='fa fa-home' />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{BonusUi}</BreadcrumbItem>
            <BreadcrumbItem active>{"Breadcrumb"}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcon;
