import { verticalValidationWizardNavData } from '@/Data/Form/FormLayout/FormWizardData';
import { VerticalFormPropsType } from '@/Types/FormLayoutTypes';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavComponent:React.FC<VerticalFormPropsType> = ({ callbackActive,activeTab }) => {
  return (
    <Nav className="flex-column header-vertical-wizard">
      {verticalValidationWizardNavData.map((data, index) => (
        <NavItem key={index}>
            <NavLink
            className={activeTab === index+1 ? "active" : ""}
            onClick={() => {callbackActive(index + 1);}}
            >
                <div className="vertical-wizard">
                    <div className="stroke-icon-wizard">
                        <i className={`fa ${data.iconClassName}`} />
                    </div>
                    <div className="vertical-wizard-content">
                        <h3>{data.tittle}</h3>
                        <p>{data.tittleInforMation}</p>
                    </div>
                </div>
            </NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavComponent