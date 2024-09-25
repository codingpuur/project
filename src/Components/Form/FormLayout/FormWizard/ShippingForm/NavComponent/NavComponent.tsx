import { Nav, NavLink } from "reactstrap";
import { Fragment } from "react";
import { shipIngNavFormData } from "@/Data/Form/FormLayout/FormWizardData";
import { NavComponentProps } from "@/Types/FormLayoutTypes";

const NavComponent: React.FC<NavComponentProps> = ({ callbackActive, activeTab }) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      callbackActive(id);
    }
  };
  return (
    <Nav className='nav-pills horizontal-options shipping-options'>
      {shipIngNavFormData.map((data, index) => (
        <Fragment key={index}>
          <NavLink className={` b-r-0 ${activeTab === index + 1 ? "active" : ""}`} onClick={() => handleTab(data.activeTab)}>
            <div className='cart-options'>
              <div className='stroke-icon-wizard'>
                <i className={`fa ${data.iconClassName}`} />
              </div>
              <div className='cart-options-content'>
                <h3>{data.tittle}</h3>
              </div>
            </div>
          </NavLink>
        </Fragment>
      ))}
    </Nav>
  );
};

export default NavComponent;
