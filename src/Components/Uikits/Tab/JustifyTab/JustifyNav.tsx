import { Nav, NavItem, NavLink } from "reactstrap";
import { IOTdeveloper, UXdesigner, Webdesigner } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const JustifyNav: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='nav-warning'>
      <NavItem>
        <NavLink className={`${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          {Webdesigner}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          {UXdesigner}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          {IOTdeveloper}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default JustifyNav;
