import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import { Inbox, More } from "@/utils/Constant";
import { useState } from "react";

const EmailTop = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen((prevState) => !prevState);
  return (
    <div className='email-top'>
      <Row>
        <Col>
          <h3>{Inbox}</h3>
        </Col>
        <Col className='text-end'>
          <Dropdown isOpen={dropDownOpen} toggle={toggle}>
            <DropdownToggle color='deafult' className='btn dropdown-toggle'>
              {More}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>{"Action"}</DropdownItem>
              <DropdownItem>{"Another Action"}</DropdownItem>
              <DropdownItem>{"Something else here"}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default EmailTop;
