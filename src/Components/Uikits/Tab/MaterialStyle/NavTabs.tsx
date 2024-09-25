import { Nav, NavItem, NavLink } from "reactstrap";
import { Description, Review, User } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const NavTabs: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='nav-tabs border-tab border-0 mb-0 nav-danger'>
      <NavItem>
        <NavLink className={`txt-danger ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          <i className='icofont icofont-man-in-glasses' />
          {User}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`txt-danger ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          <i className='icofont icofont-file-document' />
          {Description}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`txt-danger ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          <i className='icofont icofont-star' />
          {Review}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavTabs;
