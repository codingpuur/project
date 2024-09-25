import { useState } from 'react';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Href } from '@/utils/Constant';
import { organizationList } from '@/Data/Apps/Contact/ContactData';
import Image from 'next/image';
import { ImagePath } from '@/Constant';
import { NavOrgPropType } from '@/Types/Apps/ContactTypes';

const NavOrg:React.FC<NavOrgPropType> = ({ callback }) => {
  const [organizationTab, setOrganizationTab] = useState("1");
  const handaletabs = (tab: string) => {
    setOrganizationTab(tab);
    callback(tab);
  };
  return (
    <Col xl={4} md={5} className="xl-50">
      <Nav pills className="flex-column">
        {organizationList.map((item) => (
          <NavItem id="myTab" key={item.id}>
            <NavLink href={Href} className={organizationTab === item.activeTab ? "active" : ""} onClick={() => handaletabs(item.activeTab)}>
                <div className="d-flex">
                    <Image className="p-0 img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/${item.img}`} alt="Image" width={50} height={50}/>
                    <div className="flex-grow-1">
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                    </div>
                </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  )
}

export default NavOrg