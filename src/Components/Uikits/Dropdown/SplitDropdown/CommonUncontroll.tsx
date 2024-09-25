import { useState } from 'react'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Href } from '@/utils/Constant';
import { BasicDropdownProps } from '@/Types/uikitsType';
 
const CommonUncontroll = ({ item }: BasicDropdownProps) => {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Button color={`outline-${item.class}`}>{item.text}</Button>
            <UncontrolledDropdown className='separated-btn' isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color={item.class}>
                    <i className="icofont icofont-arrow-down"></i>
                </DropdownToggle>
                <DropdownMenu className='dropdown-content'>
                    {
                        item.menulist && item.menulist.map((item, index) => (
                            <DropdownItem href={Href} key={index} >{item}</DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}

export default CommonUncontroll