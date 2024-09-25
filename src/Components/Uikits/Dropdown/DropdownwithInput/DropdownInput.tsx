import { Defaultcheckbox, Defaultradio, Inputs } from '@/utils/Constant';
import { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Input, InputGroup } from 'reactstrap';

const DropdownInput = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="warning" className="text-white">{Inputs}</DropdownToggle>
        <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
            <InputGroup className="rounded-0 border-0 shadow-none">
              <div className="input-group-text">
                <Input className="mt-0" type="checkbox" value="" />
              <span>{Defaultcheckbox}</span>
              </div>
            </InputGroup>
            <InputGroup className="input-group rounded-0 border-0 shadow-none">
              <div className="input-group-text">
                <Input className="mt-0" type="radio" value="" />
              <span>{Defaultradio}</span>
              </div>
            </InputGroup>
        </DropdownMenu>
      </Dropdown>
    )
}

export default DropdownInput