import { BasicDropdownType } from "@/Data/Uikits/Dropdown/DropdownData";
import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

type PropsType = {
    item: BasicDropdownType
}
const DropdownCommon:React.FC<PropsType> = ({ item }) => {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
  return (
    <div className="btn-group">
      <Dropdown
        isOpen={open}
        toggle={toggle}
        direction={item.position ? item.position : "down"}
      >
        <DropdownToggle color={item.class}>{item.text}</DropdownToggle>
        <DropdownMenu className={item.bodyClass}>
          {item.menulist &&
            item.menulist.map((item, index) => (
              <DropdownItem key={index}>
                {item}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownCommon;
