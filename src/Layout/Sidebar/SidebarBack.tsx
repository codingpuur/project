import { Back } from "@/utils/Constant";
import Link from "next/link";

const SidebarBack = () => {
  return (
    <li className="back-btn">
      <Link href={`/dashboards/shoppingplace`}></Link>
      <div className="mobile-back text-end">
        <span>{Back}</span>
        <i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
      </div>
    </li>
  );
};

export default SidebarBack;
