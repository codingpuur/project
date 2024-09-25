import { Nav } from "reactstrap";
import { NavcustomizerType } from "@/Types/ThemeCustomizerTypes";
import { Href, Quickoption } from "@/utils/Constant";
import Navlinks from "./Navlinks";
import Link from "next/link";

const NavCustomizer:React.FC<NavcustomizerType> = ({ callbackNav, selected }) => {
  return (
    <Nav className="flex-column nac-pills">
      <Link
        className={`${selected === "sidebar-type" ? "active" : ""} nav-link` }
        onClick={() => callbackNav("sidebar-type", true)}
        href={Href}
      >
        <div className="settings">
          <i className="icon-palette"></i>
        </div>
        <span>{Quickoption}</span>
      </Link>
      <Navlinks />
    </Nav>
  );
};

export default NavCustomizer;
