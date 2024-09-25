import { Nav, NavItem, NavLink } from "reactstrap";
import { Aboutus, Blog, Contactus } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const PillNav: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='nav-pills nav-primary border-0'>
      <NavItem>
        <NavLink className={`${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          {Aboutus}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          {Contactus}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          {Blog}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default PillNav;
