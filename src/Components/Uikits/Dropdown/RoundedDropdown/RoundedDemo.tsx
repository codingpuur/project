import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Dark, Href, Light, Lighter, Primary } from "@/utils/Constant";

const RoundedDemo = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Dropdown isOpen={open} toggle={toggle} direction='down'>
      <DropdownToggle color='primary' className='rounded-pill'>
        {Primary}
      </DropdownToggle>
      <DropdownMenu className='dropdown-content'>
        <DropdownItem href={Href}>{Dark}</DropdownItem>
        <DropdownItem href={Href}>{Light}</DropdownItem>
        <DropdownItem href={Href}>{Lighter}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default RoundedDemo;
