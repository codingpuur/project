import { useState } from 'react'
import { Button, Col, Input, InputGroup, Row } from 'reactstrap';
import { Send } from '@/utils/Constant';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { replyByUserAsync, sendMessageAsync } from '@/Redux/Reducer/ChatSlice';
import Image from 'next/image';
import { ImagePath } from '@/Constant';

const SendChat = () => {
    const [messageInput, setMessageInput] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const { chats, selectedUser, currentUser } = useAppSelector((state) => state.chatData);
  
    const dispatch = useAppDispatch();  
    const addEmoji = (emoji: string) => {
      const text = `${messageInput}${emoji}`;
      setShowEmojiPicker(false);
      setMessageInput(text);
    };
    const handleMessageChange = (message: string) => {
      setMessageInput(message);
    };
    
    const handleMessagePress = () => {
      var container = document.getElementsByClassName("chat-history")[0];
      setTimeout(function () {
        container?.scrollBy({ top: 200, behavior: "smooth" });
      }, 310);
      let currentUserId = currentUser.id;
      let selectedUserId = selectedUser.id;
      let selectedUserName = selectedUser.name;
      if (messageInput.length > 0) {
        dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
        setMessageInput("");
        setTimeout(() => {
          const replyMessage = "Hey This is " + selectedUserName + ", Sorry I'm busy right now, I will text you later";
          if (selectedUser.online === true) {
            document.getElementsByClassName("status-circle")[0]?.classList.add("online");
          }
          dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
        }, 2000);
      }
    }; 
  return (
    <div className="chat-message clearfix">
      <Row>
        <div>
          {showEmojiPicker ? (<Picker data={data} onEmojiSelect={(e: any) => { addEmoji(e.native);}}/>) : null}
        </div>
        <Col xl={12} className="d-flex">
          <div className="smiley-box bg-primary">
            <div className="picker" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <Image  src={`${ImagePath}/smiley.png`} alt="smiley" height={29} width={28}/>
            </div>
          </div>
          <InputGroup className="text-box">
            <Input type="text" className="input-txt-bx" placeholder="Type a message......" value={messageInput} onChange={(e) => handleMessageChange(e.target.value)}/>
            <Button className="input-group-text" color="primary" onClick={handleMessagePress}>{Send}</Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default SendChat