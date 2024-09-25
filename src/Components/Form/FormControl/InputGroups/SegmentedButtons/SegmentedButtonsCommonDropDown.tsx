import { Fragment, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { ToggleDropdown } from '@/utils/Constant';
import { CommonButtonsWithDropdownProps } from '@/Data/Form/FormControl/FormControlData';
 
const SegmentedButtonsCommonDropDown:React.FC<CommonButtonsWithDropdownProps> = ({dropdownItems,toggleColor}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle  className="dropdown-toggle-split dropdown-toggle" color={toggleColor}>
        <span className="visually-hidden">{ToggleDropdown}</span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-block dropdown-menu-end"> 
        {dropdownItems.map((data, index) => (
          <Fragment key={index}>
            {data.name ? (
              <DropdownItem>{data.name}</DropdownItem>
            ) : (
              <DropdownItem divider />
            )}
          </Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default SegmentedButtonsCommonDropDown