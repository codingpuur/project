import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import Link from "next/link";
import SVG from "@/utils/CommonSvgIcon/SVG";

export interface propsTypes {
  mainTitle: string;
  parent: string;
  title: string;
}

const Breadcrumbs = ({ mainTitle, parent, title }: propsTypes) => {
  return (
    <Col xs="12">
      <div className="page-title">
        <Row>
          <Col sm={6} className="ps-0">
            <h3>{mainTitle}</h3>
          </Col>
          <Col sm={6} className="pe-0">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href={`/dashboards/shoppingplace`}>
                  <SVG iconId="stroke-home" className="stroke-icon" />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{parent}</BreadcrumbItem>
              <BreadcrumbItem className="active">{title}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Breadcrumbs;
