import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Gallery, Gallery_grid, Home, Href } from "@/utils/Constant";
import Link from "next/link";

const BgDanger = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-0 bg-danger">
      <BreadcrumbItem>
        <Link className="fw-bold" href={Href}>
          {Home}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" href={Href}>
          {Gallery}
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className="fw-bold">{Gallery_grid}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BgDanger;
