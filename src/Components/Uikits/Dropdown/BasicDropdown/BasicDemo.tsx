import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Crypto, Dashboard, Ecommerce, Href, Project } from "@/utils/Constant";

const BasicDemo = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => { setOpen(!open) }
  return (
    <div className="btn-group">
      <Dropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle color="primary">{Dashboard}</DropdownToggle>
        <DropdownMenu className="dropdown-content">
          <DropdownItem href={Href}>{Project}</DropdownItem>
          <DropdownItem href={Href}>{Ecommerce}</DropdownItem>
          <DropdownItem href={Href}>{Crypto}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default BasicDemo;
