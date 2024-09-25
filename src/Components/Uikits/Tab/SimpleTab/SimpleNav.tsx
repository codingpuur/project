import { Nav, NavItem, NavLink } from "reactstrap";
import { Contact, Home, Profile } from "@/utils/Constant";
import { SimpleNavPropsType } from "@/Types/uikitsType";

const SimpleNav: React.FC<SimpleNavPropsType> = ({ basicTab, setBasicTab }) => {
  return (
    <Nav tabs className='simple-wrapper'>
      <NavItem>
        <NavLink className={`txt-primary ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>
          {Home}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`txt-primary ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>
          {Profile}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`txt-primary ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>
          {Contact}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SimpleNav;
