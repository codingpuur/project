import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Buttondropdowns } from "@/utils/Constant";
import { useState } from "react";

const ButtonDropdowns = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <tr>
      <td>{Buttondropdowns}</td>
      <td>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret color='primary'>
            {"Primary"}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>{"Dropdown header"}</DropdownItem>
            <DropdownItem>{"Action"}</DropdownItem>
            <DropdownItem>{"Another action"}</DropdownItem>
            <DropdownItem>{"Something else here"}</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>{"Separated link"}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </td>
      <td>
        <span>
          Use <code>.dropdown-toggle</code> class to button for Dropdown-toggle.
        </span>
      </td>
    </tr>
  );
};

export default ButtonDropdowns;
