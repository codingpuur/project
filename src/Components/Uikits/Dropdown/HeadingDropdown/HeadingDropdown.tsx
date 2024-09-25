import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Balloons, Cake, HeadingDropdowns, Href, Party, PartyList } from "@/utils/Constant";
import CommonHeader from "@/Common/CommonHeader";
import { HeadingDropdownData } from "@/Data/Uikits/Dropdown/DropdownData";

const HeadingDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Col xl={4} sm={6}>
      <Card className='height-equal'>
        <CommonHeader title={HeadingDropdowns} subTitle={HeadingDropdownData} headClass='pb-0' />
        <CardBody className='rtl-dropdown'>
          <div className='common-flex'>
            <div className='btn-group'>
              <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='success rounded-pill'>{Party}</DropdownToggle>
                <DropdownMenu className='dropdown-content'>
                  <DropdownItem href={Href} header className='fw-bold fs-6 border-bottom border-2'>
                    {PartyList}
                  </DropdownItem>
                  <DropdownItem href={Href}>{Balloons}</DropdownItem>
                  <DropdownItem href={Href}>{Cake}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingDropdown;
