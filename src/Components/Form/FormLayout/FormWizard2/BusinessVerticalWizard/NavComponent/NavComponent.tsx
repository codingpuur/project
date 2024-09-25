import { businessVerticalWizardFormData } from "@/Data/Form/FormLayout/FormWizardData";
import { BusinessFormCommonProps } from "@/Types/FormLayoutTypes";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavComponent: React.FC<BusinessFormCommonProps> = ({ callbackActive, activeTab }) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      callbackActive(id);
    }
  };
  return (
    <Nav className='nav-pills horizontal-options'>
      {businessVerticalWizardFormData.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={` b-r-0 ${activeTab === index + 1 ? "active" : ""}`} onClick={() => handleTab(data.activeTab)}>
            <div className='horizontal-wizard'>
              <div className='stroke-icon-wizard'>
                <span>{index + 1}</span>
              </div>
              <div className='horizontal-wizard-content'>
                <h3>{data.tittle}</h3>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
