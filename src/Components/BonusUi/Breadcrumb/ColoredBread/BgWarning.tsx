import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Flag_icon, Home, Href, Icons } from "@/utils/Constant";
import Link from "next/link";

const BgWarning = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-b-30 bg-warning">
      <BreadcrumbItem>
        <Link className="fw-bold" href={Href}>
          {Home}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" href={Href}>
          {Icons}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className=" fw-bold">{Flag_icon}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BgWarning;
