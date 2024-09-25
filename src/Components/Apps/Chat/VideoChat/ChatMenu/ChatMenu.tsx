import { useState } from 'react'
import { Call, Profile, Status } from '@/utils/Constant';
import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import ChatMenuTabContent from './ChatMenuTabContent';
import { useAppSelector } from '@/Redux/Hooks';

const ChatMenu = () => {
  const [activeTab, setActiveTab] = useState(1);
  const chatMenuNavData = [Call, Status, Profile];
  const {toggleSideBar} = useAppSelector((state)=>state.chatData)
  return (
    <Col className={`chat-menu chat-menu-col ps-xl-0 ${toggleSideBar ? "show" : ""}`}>
      <Nav tabs className="border-tab nav-primary">
        {chatMenuNavData.map((data, index) => (
          <NavItem key={index}>
            <NavLink
              className={activeTab === index + 1 ? "active" : ""}
              onClick={() => setActiveTab(index + 1)}
              style={{ cursor: "pointer" }}
            >
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ChatMenuTabContent activeTab={activeTab} />
    </Col>
  )
}

export default ChatMenu