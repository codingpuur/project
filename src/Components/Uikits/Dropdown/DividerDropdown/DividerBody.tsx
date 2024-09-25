import { DividerBodyType } from "@/Types/uikitsType";
import { Fragment, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DividerBody: React.FC<DividerBodyType> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className='btn-group'>
      <Dropdown isOpen={open} toggle={toggle} direction='down'>
        <DropdownToggle color={item.class}>{item.text}</DropdownToggle>
        <DropdownMenu className='dropdown-block'>{item.menulist && item.menulist.map((item, index) => <Fragment key={index}>{item !== "" ? <DropdownItem>{item}</DropdownItem> : <DropdownItem divider></DropdownItem>}</Fragment>)}</DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DividerBody;
