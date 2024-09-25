import { Nav, NavItem, NavLink } from "reactstrap";
import { Contact, Home, Profile } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const IconNav: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='simple-wrapper'>
      <NavItem>
        <NavLink className={`txt-secondary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          <i className='icofont icofont-ui-home'></i>
          {Home}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`txt-secondary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          <i className='icofont icofont-man-in-glasses'></i>
          {Profile}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`txt-secondary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          <i className='icofont icofont-contacts'></i>
          {Contact}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default IconNav;
