import { Col, Row } from 'reactstrap'
import ChatMenu from '../VideoChat/ChatMenu/ChatMenu'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import SendChat from './SendChat'

const UserChatting = () => {
  return (
    <Row className="chat-box">
      <Col className="pe-0 chat-right-aside">
        <div className="chat">
          <ChatHeader />
          <ChatMessage />
          <SendChat />
        </div>
      </Col>
      <ChatMenu />
    </Row>
  )
}

export default UserChatting