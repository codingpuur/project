import { Nav, NavItem, NavLink } from "reactstrap";
import { Components, Home, Pages, Settings } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const VerticalNav: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='flex-column nav-pills nav-success border-0'>
      <NavItem>
        <NavLink className={`${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          {Home}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          {Components}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          {Pages}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "4" ? "active" : ""}`} onClick={() => setBasicTab("4")}>
          {Settings}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default VerticalNav;
