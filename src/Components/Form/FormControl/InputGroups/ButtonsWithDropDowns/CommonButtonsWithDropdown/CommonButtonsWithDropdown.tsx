import { Fragment, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownHeading } from '@/utils/Constant';
import { CommonButtonsWithDropdownProps } from '@/Data/Form/FormControl/FormControlData';

const CommonButtonsWithDropdown:React.FC<CommonButtonsWithDropdownProps> = ({dropdownItems,toggleColor}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className={`btn-outline-${toggleColor}`} color="transparent">{DropdownHeading}</DropdownToggle>
      <DropdownMenu className="dropdown-block">
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
  );
}

export default CommonButtonsWithDropdown