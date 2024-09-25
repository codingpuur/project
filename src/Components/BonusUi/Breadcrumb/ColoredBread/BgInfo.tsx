import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { BonusUi, Home, Href } from "@/utils/Constant";
import Link from "next/link";

const BgInfo = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-b-30 bg-info">
      <BreadcrumbItem>
        <Link className="fw-bold" href={Href}>
          {Home}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" href={Href}>
          {BonusUi}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className="fw-bold">{'Breadcrumb'}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BgInfo;
