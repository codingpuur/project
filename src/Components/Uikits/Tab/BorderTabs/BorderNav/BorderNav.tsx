import { Nav, NavItem, NavLink } from "reactstrap";
import { Contact, Home, Inbox } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const BorderNav: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='nav-tabs border-tab mb-0 nav-info'>
      <NavItem>
        <NavLink className={`nav-border txt-info tab-info pt-0 ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          <i className='icofont icofont-ui-home' />
          {Home}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`nav-border txt-info tab-info ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          <i className='icofont icofont-ui-message' />
          {Inbox}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`nav-border txt-info tab-info ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          <i className='icofont icofont-man-in-glasses' />
          {Contact}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default BorderNav;
