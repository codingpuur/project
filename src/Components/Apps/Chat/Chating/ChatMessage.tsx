import { ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { fetchChatMemberAsync, setChats, setSelectedUser } from '@/Redux/Reducer/ChatSlice';
import { AllMembersType, MessageType } from '@/Types/Apps/ChatTypes';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ChatMessage = () => {
    const bottomRef = useRef<null | HTMLDivElement>(null);
    const [scroll, setScroll] = useState(0);
    const { allMembers, chats, selectedUser, currentUser } = useAppSelector((state) => state.chatData);
    const dispatch = useAppDispatch();
  
    const fetchChatAsync = () => {
      if (chats.length > 0) {
        const currentUserId = 0;
        const chat = chats.filter((x: any) => x.users.includes(currentUserId));
        const selectedUser = chats[0].users.find((x: any) => x !== currentUserId);
        const oneSelect =allMembers.find((x:AllMembersType) => x.id === selectedUser);
        if (allMembers.length > 0) {
          dispatch(setChats(chat));
          dispatch(setSelectedUser(oneSelect));
        }
        if (allMembers.length > 0) allMembers.find((x: any) => x.id === selectedUser);
      }
    };
  
    useEffect(() => {
      dispatch(fetchChatMemberAsync());
      fetchChatAsync();
      setScroll(1);
    }, [dispatch, allMembers.length, chats.length]);
    
    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats, scroll]);
  
    const selectedChat = (allMembers && chats && selectedUser) ? chats.find((x: any) =>x.users.includes(currentUser.id) &&x.users.includes(selectedUser.id)): null;
  return (
    <>
      {allMembers && chats && selectedUser ? (
        <div className="chat-history chat-msg-box custom-scrollbar">
          <ul>
            {selectedChat && selectedChat.messages.length > 0 ? (
              selectedChat.messages.map((item: MessageType, id: number) => {
                const participators:AllMembersType | any = allMembers.find((x:AllMembersType) => x.id === item.sender);
                return (
                  <li key={id} className={` ${item.sender !== currentUser.id? "": "clearfix"}`} >
                    <div className={`message my-message ${item.sender !== currentUser.id? "": "pull-right other-message"}`}>
                      <Image alt={"user"} src={`${ImagePath}/${participators.thumb}`} className={`rounded-circle ${item.sender !== currentUser.id ? 'float-start' : 'float-end'} chat-user-img img-30 h-auto`} height={52} width={52}/>  
                      <div className="message-data text-end">
                        <span className="message-data-time">{item.time}</span>
                      </div>
                      {item.text}
                    </div>
                  </li>
                );
              })
            ) : (
              <div><Image className="img-fluid w-100 h-auto" src={`${ImagePath}/start-conversion.jpg`} alt="start conversion" height={505} width={758}/></div>
            )}
            <li>
              <div ref={bottomRef}></div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </>
  )
}

export default ChatMessage